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
        if(this.observer){
            this.observer.disconnect();
        }
    },
    methods : {
        createObserver(){

            if(this.observer){
                this.observer.disconnect();
            }

            this.observer = new IntersectionObserver((entries) => {
                if(entries.length > 0){
                    const entry = entries[0];
                    if(entry.isIntersecting){
                        this.$emit('observer:show');
                    } else {
                        this.$emit('observer:hidden');
                    }
                }
                
            }, this.observerOptions);
            const observerElement = this.$refs.observerElement;
            this.observer.observe(observerElement);
        }
    }
}

</script>

<style></style>