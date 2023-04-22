<template>
  <div class="py-4 container-fluid">
    <div class="mt-4 row">
      <div class="col-12">
        <div class="mb-4 card">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-1">Projects</h6>
            <p class="text-sm">Architects design houses</p>
          </div>
          <div class="p-3 card-body">
              <Hollywood-movie-project-card
                title="Modern"
                :image="img1"
                label="Project #2"
                description="As Uber works through a huge amount of internal
                management turmoil."
                :authors="[
                  {
                    image: team1,
                    name: 'Elena Morison',
                  },
                  {
                    image: team2,
                    name: 'Ryan Milly',
                  },
                  {
                    image: team3,
                    name: 'Nick Daniel',
                  },
                  {
                    image: team4,
                    name: 'Peterson',
                  },
                ]"
                :action="{
                  color: 'success',
                  label: 'View Project',
                }"
              />
              <div class="mb-4 col-xl-3 col-md-6 mb-xl-0">
                <place-holder-card
                  :title="{ text: 'New project', variant: 'h5' }"
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HollywoodMovieProjectCard from "./components/HollywoodMovieProjectCard.vue";
import US from "../assets/img/icons/flags/US.png";
import DE from "../assets/img/icons/flags/DE.png";
import GB from "../assets/img/icons/flags/GB.png";
import BR from "../assets/img/icons/flags/BR.png";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";
import img1 from "@/assets/img/home-decor-1.jpg";
import img2 from "@/assets/img/home-decor-2.jpg";
import img3 from "@/assets/img/home-decor-3.jpg";
import {
  faHandPointer,
  faUsers,
  faCreditCard,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
export default {
  name: "dashboard-default",
  data() {
    return {
      img1,
      team1,
      team2,
      team3,
      team4,
      img2,
      img3,
      iconBackground: "bg-gradient-success",
      faCreditCard,
      faScrewdriverWrench,
      faUsers,
      faHandPointer,
      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
    };
  },
  components: {
    HollywoodMovieProjectCard,
  },
};
</script>
