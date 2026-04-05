<template>
  <div class="overlay">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
}

.spinner {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #3b1702,
    transparent,
    #3b1702
  );

  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>