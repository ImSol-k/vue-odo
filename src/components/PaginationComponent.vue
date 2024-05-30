<template>
    <div class="pagination">
      <button @click="changePage(1)" :disabled="currentPage === 1">««</button>
      <button @click="prevPage" :disabled="currentPage === 1">‹</button>
      <button 
        v-for="page in pages" 
        :key="page" 
        @click="changePage(page)" 
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages">›</button>
      <button @click="changePage(totalPages)" :disabled="currentPage === totalPages">»»</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaginationComponent',
    props: {
      totalPages: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        default: 1
      }
    },
    computed: {
      pages() {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
      }
    },
    methods: {
      changePage(page) {
        this.$emit('update:currentPage', page);
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.changePage(this.currentPage - 1);
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.changePage(this.currentPage + 1);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    align-items: center;
  }
  button {
    background: #f0f0f0;
    border: none;
    padding: 5px 10px;
    margin: 2px;
    cursor: pointer;
  }
  button.active {
    background: #444;
    color: white;
  }
  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  </style>
  