<template>
    <!-- https://powerku.tistory.com/243 -->
    <div ref="observerElement"></div>
</template>

<script>
export default {
    data(){
        return {
            observer : null,
            observerOptions : {
                rootMargin : '0px',
                threshold : 1.0
            }
        };
    },
    mounted() {
        this.createObserver();
    },
    beforeUnmount(){
        this.disconnectObserver();
    },
    methods : {
        createObserver(){
            if(!this.observer){
                this.observer = new IntersectionObserver((entries) => {
                    if(entries.length > 0){
                        const entry = entries[0];
                        if(entry.isIntersecting){
                            this.handleIntersection(true);
                        } else {
                            this.handleIntersection(false);
                        }
                    }
               
                }, this.observerOptions);
            }
            
            const observerElement = this.$refs.observerElement;
            this.observer.observe(observerElement);
        },
        disconnectObserver(){
            if(this.observer){
                this.observer.disconnect();
                this.observer = null;
            }
        },
        handleIntersection(isIntersecting){
            if(isIntersecting){
                this.$emit('show');
            } else {
                this.$emit('hidden');
            }
        }

    },

}

</script>

<style></style>