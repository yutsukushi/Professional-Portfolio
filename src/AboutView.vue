<script setup>
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <SiteHeader variant="case-study" />

  <main class="about-main">
    <section class="about-intro" aria-labelledby="about-title">
      <div class="about-photo about-photo--large" role="img" aria-label="Large personal photo placeholder">
        <img class="about-photo-image" src="../assets/images/about/me.jpg" alt="Yukie Kushibiki hiding behind a big plant" />
      </div>

      <div class="about-copy">
      <h2 id="about-title" class="about-title">Hi, I'm Yukie!</h2>
        <p>
          I'm a frontend designer and developer based in Pittsburgh, PA, with a fine arts background from Penn State University and a love for untangling complex problems.
        </p>

        <p>
          When I'm not designing, I'm probably adding another plant to my collection, working on a crochet project, browsing for the perfect tiny trinket, opening trading cards, or playing video games. I'm also a huge animal advocate and care deeply about animal welfare. I also have an alarming number of photos of my cats and other people's cats.
        </p>

        <p>
          My path into design started through drawing and painting, but what kept me here is the challenge of turning complicated systems into experiences that feel simple and approachable. I enjoy the intersection of creativity, strategy, and problem-solving, especially when working on tools that help people do their jobs more effectively.
        </p>

        <p>
          The things I collect and create outside of work reflect how I approach design: curiosity, patience, attention to detail, and a genuine love of learning how things fit together.
        </p>
      </div>
    </section>
    <!-- <section style="margin: 0 auto;"><b>Things I love</b></section> -->
    <section class="about-gallery" aria-label="Personal photos">
      <div class="gallery-photo gallery-photo--portrait">
        <img src="../assets/images/about/kellyspainting.jpg" alt="A record player and colorful artwork in a cozy home" />
      </div>
      <div class="gallery-photo gallery-photo--wide">
        <img src="../assets/images/about/tablerunner.jpg" alt="Hand-embroidered floral table runner" />
      </div>
      <div class="gallery-photo gallery-photo--square">
        <img src="../assets/images/about/closeup.jpg" alt="Close-up of colorful painted lettering" />
      </div>
      <div class="gallery-photo gallery-photo--plants">
        <img src="../assets/images/about/plants.jpg" alt="A collection of green houseplants" />
      </div>
      <div class="gallery-photo gallery-photo--square">
        <img src="../assets/images/about/gallery.jpg" alt="A set of paintings in a gallery" />
      </div>
      <div class="gallery-photo gallery-photo--plants">
        <img src="../assets/images/about/coco.jpg" alt="A cat laying on yarn" />
      </div>
    </section>
  </main>

  <SiteFooter />
</template>

<style scoped>
.about-main {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
}

.about-intro {
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.35fr);
  gap: clamp(2rem, 7vw, 6rem);
  align-items: start;
  padding-top: 1.5rem;
}

.about-title {
  margin: 1rem 0;
  font-size: 2rem;
  line-height: 0.95;
  letter-spacing: -0.05em;
}

.about-copy {
  max-width: 43rem;
  font-size: clamp(1rem, 1.35vw, 1.125rem);
  line-height: 1.72;
}

.about-copy p {
  margin: 0;
}

.about-copy p + p {
  margin-top: 1.25em;
}

.about-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  width: 100%;
  margin-top: 1.5rem;
}

.gallery-photo {
  position: relative;
  aspect-ratio: 1;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  border-radius: 6px;
  background: #edf0e8;
  border: 1px solid rgb(32 39 32 / 8%);
}

.gallery-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-photo--portrait img {
  object-position: center 58%;
}

.gallery-photo--wide img {
  object-position: center 38%;
}

.gallery-photo--square img {
  object-position: 52% center;
}

.gallery-photo--plants img {
  object-position: center 42%;
}

.about-photo {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  border-radius: 6px;
  background:
    linear-gradient(135deg, rgb(132 64 200 / 9%), rgb(132 64 200 / 2%)),
    #edf0e8;
  border: 1px solid rgb(32 39 32 / 8%);
}

.about-photo-image {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
}

.about-intro > .about-photo--large {
  width: 100%;
  height: 100%;
}

.about-photo--large {
  background:
    linear-gradient(135deg, rgb(132 64 200 / 10%), transparent),
    #e9ede4;
}

@media (max-width: 768px) {
  .about-main {
    gap: 2.5rem;
  }

  .about-intro {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .about-title {
    max-width: 12ch;
  }

  .about-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .about-photo--large {
    height: auto;
    aspect-ratio: 4 / 5;
  }

  .about-intro > .about-photo--large .about-photo-image {
    object-position: 50% 18%;
  }
}

@media (max-width: 480px) {
  .about-gallery {
    grid-template-rows: auto 11rem;
    gap: 0.75rem;
  }
}
</style>
