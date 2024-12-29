<template>
  <section id="education" class="py-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm scroll-mt-header">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 class="text-4xl font-bold text-center mb-6">Education</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- First Card -->
        <div
          class="flex items-center gap-6 bg-white shadow-md p-6 rounded max-w-4xl mx-auto transform transition-transform duration-300 hover:scale-105 dark:bg-gray-800"
        >
          <img
            src="~/public/images/nait.jpg"
            alt="NAIT Feltham Centre"
            class="w-48 h-48 object-cover rounded"
          />
          <div class="text-left">
            <h3 class="text-2xl font-semibold">Diploma<br />Digital Media and IT</h3>
            <p class="text-gray-600">NAIT (2023-2025)</p>
          </div>
        </div>
        <!-- Second Card -->
        <div
          class="flex items-center gap-6 bg-white shadow-md p-6 rounded max-w-4xl mx-auto transform transition-transform duration-300 hover:scale-105 dark:bg-gray-800"
        >
          <img
            src="~/public/images/uofa.jpg"
            alt="UofA CCIS Building"
            class="w-48 h-48 object-cover rounded"
          />
          <div class="text-left">
            <h3 class="text-2xl font-semibold">
              Bachelor of Science <br />Computer Science<br />Business Minor
            </h3>
            <p class="text-gray-600">University of Alberta (2010-2015)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
