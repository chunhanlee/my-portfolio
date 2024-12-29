<template>
  <div class="background-pattern fixed inset-0 -z-10 dark:bg-gray-900">
    <div class="pattern-grid"></div>
    <div class="floating-circles">
      <div v-for="n in 8" :key="n" class="circle dark:opacity-30"></div>
    </div>
  </div>
</template>

<style scoped>
.background-pattern {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  overflow: hidden;
}

.dark .background-pattern {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%);
}

.pattern-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: patternMove 20s linear infinite;
}

.floating-circles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circle {
  position: absolute;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.3));
  border-radius: 50%;
  animation: float 20s infinite;
}

.circle:nth-child(1) { width: 400px; height: 400px; left: 10%; top: 10%; }
.circle:nth-child(2) { width: 300px; height: 300px; left: 60%; top: 20%; animation-delay: -4s; }
.circle:nth-child(3) { width: 250px; height: 250px; left: 30%; top: 40%; animation-delay: -8s; }
.circle:nth-child(4) { width: 350px; height: 350px; left: 80%; top: 50%; animation-delay: -12s; }
.circle:nth-child(5) { width: 280px; height: 280px; left: 45%; top: 70%; animation-delay: -16s; }
.circle:nth-child(6) { width: 320px; height: 320px; left: 15%; top: 80%; animation-delay: -20s; }
.circle:nth-child(7) { width: 200px; height: 200px; left: 75%; top: 85%; animation-delay: -24s; }
.circle:nth-child(8) { width: 450px; height: 450px; left: 50%; top: 30%; animation-delay: -28s; }

@keyframes patternMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-50px, 100px); }
  50% { transform: translate(50px, 50px); }
  75% { transform: translate(100px, -50px); }
}
</style> 