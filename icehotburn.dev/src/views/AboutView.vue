<script setup lang="ts">
import AboutSection from "@/components/AboutSection.vue";
import CaptionedImage from "@/components/CaptionedImage.vue";
</script>
<template>
  <div class="md:flex justify-between">
    <div class="md:w-7/12 flex flex-col">
      <AboutSection
        :isHeader="true"
        :title="'About Me'"
        :updatedDate="'Updated November 10th, 2022'"
        :content="'<p> Hi, I\'m Chris 👋 I\'m a software engineer, dog father, and an avid weight lifter currently residing in Barcelona! Benvinguts (welcome in Catalan) to my tiny piece of the internet. Here is where I show off my projects, experiment with new technologies, and let the world learn a little bit about me. </p> <br /> <p> Check out my side-projects on the <RouterLink class=\'text-blue-600 hover:underline\' to=\'/projects\' >projects</RouterLink > page! There you will find an assortment of projects I\'ve created to help solve problems I\'ve faced at some point in my life. </p> <br /> <p> Check out the source code for the site and projects on <a class=\'text-blue-600 hover:underline\' href=\'https://github.com/Icehotburn\' > GitHub</a >, or get in touch with me on <a class=\'text-blue-600 hover:underline\' href=\'https://www.linkedin.com/in/chrisbaumann349/\' > LinkedIn</a >! </p>'"
      />
      <AboutSection
        :isHeader="false"
        :title="'What I\'m up to'"
        :updatedDate="'Updated November 9th, 2022'"
        :content="'<p>These days, I\'m working as a Java engineer by day and a language agnostic programmer by night. I\'ve gotten back into my 4 day a week gym routine, and hope to set a new PR by the end of this year.<br /><br />Carla and I adopted an adorable puppy in August of this year, and the new experience has been both amazing and challenging at times. He just turned 5 months old, never gets tired, and is just about potty-trained (fingers crossed). Nothing really puts life in perspective like having another life depend on you completely. To that end, adopting Kobe is also easily one of the best decisions Carla and I have ever made. <br /> <br /> Outside of that, my 1-year anniversary of moving to Barcelona and becoming an expat passed in October, and don\'t foresee myself moving back to the USA anytime soon. </p>'"
      />
      <AboutSection
        :isHeader="false"
        :title="'About The Site'"
        :updatedDate="'Updated November 9th, 2022'"
        :content="'<p> Note: I\'m currently looking into having our own public IP address to remove the dependency on the Cloudflare tunnel. </p> <br /> <p> This site was built using Vue3 and is self-hosted from our home on a single Raspberry Pi 3b. The Raspberry Pi makes use of docker compose to run several containers that serve the website, provide host metrics, tunnel out of our ISP provider\'s CGNAT, and provide many other niceties. You can read more about the entire tech stack on <a class=\'text-blue-600 hover:underline\' href=\'https://github.com/Icehotburn\'>Github</a>. </p> <br /> <p> Furthermore, deployment pipeline for the site and services is fully automated thanks to Watchtowerrr and GitHub Actions. Whenever an update is made to the main branch: </p> <ul class=\'list-decimal list-inside pl-8\'> <li>GitHub Actions builds and pushes a new image to ghcr.io</li> <li> Watchtowerrr polls this registry every hour, checking for a new image </li> <li> If a new image has been pushed, Watchtowerrr starts up the new container and migrates traffic to it all without causing any downtime </li> </ul>'"
      />
      <AboutSection
        :isHeader="false"
        :title="'Miscellaneous'"
        :updatedDate="'Updated November 9th, 2022'"
        :content="' <ul class=\'list-disc list-inside\'> <li>Conferences</li> <ul class=\'list-circle px-8\'> <li> <a class=\'text-blue-600 hover:underline\' href=\'https://www.jbcnconf.com/2022/\' >JBCNConf 2022</a > </li> </ul> <li> <a class=\'text-blue-600 hover:underline\' href=\'https://docs.google.com/document/d/1EUnW_vdmew66uBVBjahia-M5np31xC0D/edit?usp=sharing&ouid=105598706377290686410&rtpof=true&sd=true\' >Resume</a > </li> <li>Tools</li> <ul class=\'list-circle px-8\'> <li>Desktop PC</li> <ul class=\'list-square mx-8\'> <li> OS: dual boot <a class=\'text-blue-600 hover:underline\' href=\'https://canonical.com/blog/ubuntu-22-04-lts-released\' >Ubuntu 22.04</a > (development) & <a class=\'text-blue-600 hover:underline\' href=\'https://www.microsoft.com/en-us/software-download/windows10ISO\' >Windows 10</a > (gaming) </li> <li> CPU: <a class=\'text-blue-600 hover:underline\' href=\'https://www.intel.com/content/www/us/en/products/sku/88191/intel-core-i56600k-processor-6m-cache-up-to-3-90-ghz/specifications.html\' >Intel I5 6600K</a > </li> <li> GPU: <a class=\'text-blue-600 hover:underline\' href=\'https://www.evga.com/products/product.aspx?pn=06G-P4-1068-KR\' >EVGA 1660 Super</a > </li> <li> Memory: <a class=\'text-blue-600 hover:underline\' href=\'https://www.corsair.com/es/es/Categor%C3%ADas/Productos/Memoria/VENGEANCE-LPX/p/CMK16GX4M2B3000C15\' >Corsair Vengeance 16GB</a > </li> <li> Motherboard: <a class=\'text-blue-600 hover:underline\' href=\'https://rog.asus.com/motherboards/rog-strix/rog-strix-h270i-gaming-model/\' >ASUS STRIX H270I GAMING</a > </li> <li> Storage 1: <a class=\'text-blue-600 hover:underline\' href=\'https://www.samsung.com/es/memory-storage/nvme-ssd/ssd-970-evo-500gb-mz-v7e500bw/\' >Samsung 970 EVO 250gb</a > </li> <li> Storage 2: <a class=\'text-blue-600 hover:underline\' href=\'https://www.samsung.com/es/memory-storage/sata-ssd/870-evo-1tb-sata-3-2-5-ssd-mz-77e1t0b-eu/\' >Samsung 870 EVO 500gb</a > </li> <li> Case + PSU: <a class=\'text-blue-600 hover:underline\' href=\'https://nzxt.com/product/h1\' >NZXT H1</a > </li> </ul> <li> Monitor: <a class=\'text-blue-600 hover:underline\' href=\'https://www.dell.com/en-us/shop/dell-34-curved-gaming-monitor-s3422dwg/apd/210-azep/monitors-monitor-accessories\' >Dell Ultrawide S3422DWG</a > </li> <li>Relaxation Device: Playstation 4</li> <li>Work Laptop: 2021 M1 Macbook Pro 16gb</li> </ul> </ul>'"
      />
    </div>
    <div class="hidden md:w-4/12 md:flex flex-col">
      <CaptionedImage class="my-4" :image="'/Me.jpg'" :caption="'Me'" />
      <CaptionedImage class="my-4" :image="'/Carla.png'" :caption="'Carla'" />
      <CaptionedImage class="my-4" :image="'/Kobe.png'" :caption="'Kobe'" />
    </div>
  </div>
</template>
