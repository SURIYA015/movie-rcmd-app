<template>
  <div class="row">
    <div class="col-xl-3 col-md-6 mb-5" v-for="(item, index) in movies" :key="index">
      <div class="card card-blog card-plain">
        <div class="position-relative">
          <a class="shadow-xl d-block border-radius-xl">
            <img
              :src="item.movie_image"
              alt="img-blur-shadow"
              class="shadow img-fluid border-radius-xl"
            />
          </a>
        </div>
        <div class="px-1 pb-0 card-body">
          <p class="mb-2 text-sm text-gradient text-dark">{{ label }}</p>
          <a href="javascript:;">
            <h5>{{ item.movie_name }}</h5>
          </a>
          <p class="mb-4 text-sm">
            {{ item.movie_description }}
          </p>
          <div class="d-flex align-items-center justify-content-between">
            <button
              type="button"
              class="mb-0 btn btn-sm"
              :class="`btn-outline-${action.color}`"
            >
              {{ action.label }}
            </button>
            <div class="mt-2 avatar-group">
              <a
                v-for="({ image: authorImage, name }, index) of authors"
                :key="index"
                href="javascript:;"
                class="avatar avatar-xs rounded-circle"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                :title="name"
              >
                <img :alt="authorImage" :src="authorImage" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      movies:[]
    }
  },
  name: "DefaultProjectCard",
  props: {
    image: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Default Project Card",
    },
    description: {
      type: String,
      default: "",
    },
    action: {
      type: Object,
      route: String,
      color: String,
      label: String,
      default: () => {},
    },
    authors: {
      type: Array,
      image: String,
      name: String,
      default: () => [],
    },
  },
  mounted(){
    const options = {
      method: 'GET',
      url: 'http://movie_cms.test/api/getMovies'
    };
    axios(options)
    .then(response => {
      this.movies=response.data.movies
      console.log(this.movies)
    })
    .catch(error => {
      console.error(error);
    });
  }
};
</script>
