<template>
  <ion-page>
    <div class="h-screen bg-bombero-400">
      <div class="relative h-full">
      
        <!-- bottom bar -->
        <div class="absolute bottom-0 left-0 w-full px-6 py-4 z-50 bg-gradient-to-t from-[#CE3333] to-[#F94848] rounded-t-2xl flex justify-center gap-6 items-center">
          <v-btn
            elevation="0"
            rounded="lg"
            color="#BF2121"
            class="px-6 font-black"
          >
            Finalizar
          </v-btn>
          <v-btn
            elevation="0"
            rounded="lg"
            color="#FF9433"
            class="px-6 font-black text-white"
          >
            Siguiente
          </v-btn>
        </div>

        <div class="absolute z-10 w-full">
          <div class="p-2">
            <div class="p-2 rounded-2xl bg-white shadow-lg">
              <div class="flex justify-between gap-2 mb-1 pl-8">
                <p class="m-0 text-sm text-zinc-600 font-bold">Agentes Extintores 1</p>
                <p class="m-0 text-sm text-amber-500 font-bold">75/1000</p>
              </div>
              <div class="flex gap-2 pb-4 border-b">
                <div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.50794 20.75C4.50794 21.4402 5.06948 22 5.72662 22H12.0317C12.7241 22 13.2503 21.4402 13.2503 20.75L13.2503 19.5H4.50794V20.75ZM21.7263 2.21719C21.5126 2.0402 21.2321 1.96695 20.9555 2.01453L14.094 3.26453C13.6469 3.34633 13.3221 3.73445 13.3221 4.18758L10.7777 4.1875V3.25C10.7777 2.55977 10.2162 2 9.55902 2H8.2698C7.57621 2 7.01585 2.55977 7.01585 3.25L7.01585 4.29727C4.72699 4.70781 2.80335 6.32031 2.04843 8.57812C1.88436 9.07031 2.1507 9.60156 2.64308 9.76562C2.74222 9.79688 2.84175 9.8125 2.9405 9.8125C3.33432 9.8125 3.70149 9.56469 3.83276 9.17148C4.32964 7.68359 5.54519 6.60156 7.01585 6.21875V7.4375C5.53736 8.14062 4.50794 9.63281 4.50794 11.375V18.25H13.2503L13.2503 11.375C13.2503 9.63281 12.2209 8.14102 10.7777 7.4375L10.7777 6.0625L13.2503 6.06242C13.2503 6.51516 13.5755 6.90344 14.0223 6.98508L20.8838 8.19992C20.9401 8.20969 20.9964 8.21457 21.0522 8.21457C21.2707 8.21457 21.4844 8.13887 21.6545 7.9973C21.8688 7.8191 21.9924 7.55551 21.9924 7.27699V2.90234C22.028 2.65898 21.9379 2.39531 21.7263 2.21719ZM8.89678 5.75C8.55194 5.75 8.2698 5.47031 8.2698 5.125C8.2698 4.77969 8.55194 4.5 8.89678 4.5C9.24161 4.5 9.48848 4.77984 9.48848 5.125C9.48848 5.47016 9.24161 5.75 8.89678 5.75Z" fill="#F94848"/>
                  </svg>
                </div>
                <div class="w-full h-6 rounded-2xl bg-[#EDE3E3] p-1">
                  <div class="w-[15%] bg-bombero-400 h-4 rounded-full transition-all"></div>
                </div>
              </div>
              <div class="mt-4 mb-2 flex gap-4 items-center relative">
                <div class="flex justify-center items-center absolute -top-7 right-0 bg-bombero-400 rounded-2xl p-2 w-28 h-28 shadow-lg z-10">
                  <div class="max-w-max">
                    <p class="text-center text-base text-bombero-50 leading-none">Quedan</p>
                    <h2 class="text-7xl font-bebas m-0 text-white text-center leading-none">{{ count }}</h2>
                    <p class="text-center text-sm text-bombero-50 leading-none -mt-2">Segundos</p>
                  </div>
                </div>
                <v-btn icon="" elevation="0" variant="text">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.96794 26.8434C10.5222 26.8434 13.0777 26.7006 16.5337 26.064C15.9359 27.6891 14.3782 28.8537 12.5485 28.8537C11.0274 28.8537 9.6948 28.048 8.9428 26.8434H8.96794ZM28.4834 17.9771C28.7657 19.4309 27.7462 20.7166 25.4514 21.8011C24.1942 22.3943 21.3988 23.5234 16.7817 24.4217C13.2205 25.1131 10.6114 25.272 8.96908 25.272C8.48108 25.272 8.07765 25.2583 7.75994 25.24C5.22737 25.0949 3.7988 24.2834 3.51651 22.8297C3.08794 20.6274 3.76565 19.7771 4.88908 18.3691L5.18508 17.9977C5.9428 17.0366 6.2388 16.0926 5.75423 13.6023C4.66965 8.02514 7.18166 4.21371 12.6445 3.14629C18.1097 2.09143 21.8674 4.68114 22.9519 10.2594C23.4354 12.7497 24.0639 13.5131 25.1268 14.12V14.1211L25.5405 14.3554C27.1085 15.24 28.0548 15.7737 28.4834 17.9771Z" fill="#FF9433"/>
                  </svg>
                </v-btn>
                <v-btn
                  elevation="0"
                  color="#F94848"
                  rounded="xl"
                  class="px-3 normal-case"
                >
                  <template v-slot:prepend>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_169_810)">
                      <path d="M20.4799 3.512C19.3666 2.39624 18.0438 1.51142 16.5875 0.908383C15.1312 0.305342 13.5701 -0.00404089 11.9939 -0.00199646C5.36592 -0.00199646 -0.00708008 5.371 -0.00708008 11.999C-0.00708008 15.313 1.33692 18.314 3.50892 20.486C4.62225 21.6018 5.94505 22.4866 7.40134 23.0896C8.85763 23.6927 10.4187 24.002 11.9949 24C18.6229 24 23.9959 18.627 23.9959 11.999C23.9959 8.685 22.6519 5.684 20.4799 3.512ZM18.9379 18.939C18.0271 19.8521 16.9449 20.5763 15.7534 21.0698C14.5619 21.5634 13.2846 21.8166 11.9949 21.815C6.57192 21.815 2.17592 17.419 2.17592 11.996C2.1743 10.7063 2.42755 9.42903 2.92111 8.23752C3.41467 7.04601 4.13881 5.96378 5.05192 5.053C5.96248 4.13988 7.04453 3.41572 8.23588 2.92215C9.42723 2.42859 10.7044 2.17535 11.9939 2.177C17.4159 2.177 21.8119 6.573 21.8119 11.995C21.8136 13.2846 21.5604 14.5617 21.0668 15.7531C20.5733 16.9444 19.8491 18.0265 18.9359 18.937L18.9379 18.939Z" fill="#FFF9E5"/>
                      <path d="M13.5371 12L17.3921 8.145C17.5822 7.93773 17.685 7.66502 17.6789 7.3838C17.6728 7.10258 17.5583 6.83458 17.3593 6.63574C17.1604 6.43691 16.8923 6.3226 16.6111 6.31669C16.3298 6.31077 16.0572 6.41371 15.8501 6.604L15.8511 6.603L11.9961 10.458L8.14105 6.603C7.93378 6.41284 7.66107 6.31008 7.37985 6.31618C7.09863 6.32228 6.83063 6.43676 6.6318 6.63572C6.43296 6.83469 6.31866 7.10276 6.31274 7.38398C6.30683 7.66521 6.40976 7.93785 6.60005 8.145L6.59905 8.144L10.4541 11.999L6.59905 15.854C6.49059 15.9535 6.40339 16.0739 6.34269 16.208C6.28199 16.3421 6.24905 16.4871 6.24586 16.6343C6.24267 16.7814 6.26929 16.9277 6.32412 17.0643C6.37895 17.2009 6.46085 17.325 6.5649 17.4291C6.66895 17.5332 6.79299 17.6152 6.92956 17.6701C7.06612 17.7251 7.21239 17.7518 7.35955 17.7487C7.50671 17.7456 7.65172 17.7127 7.78586 17.6521C7.91999 17.5915 8.04048 17.5044 8.14005 17.396L8.14105 17.395L11.9961 13.54L15.8511 17.395C15.9506 17.5035 16.071 17.5907 16.2051 17.6514C16.3392 17.7121 16.4842 17.745 16.6313 17.7482C16.7785 17.7514 16.9248 17.7248 17.0614 17.6699C17.198 17.6151 17.3221 17.5332 17.4262 17.4292C17.5303 17.3251 17.6123 17.2011 17.6672 17.0645C17.7221 16.9279 17.7488 16.7817 17.7457 16.6345C17.7426 16.4873 17.7098 16.3423 17.6492 16.2082C17.5886 16.0741 17.5015 15.9536 17.3931 15.854L17.3921 15.853L13.5371 12Z" fill="#FFF9E5"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_169_810">
                      <rect width="24" height="24" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </template>
                  Inpugnar
                </v-btn>
              </div>
            </div>
          </div>
          <div class="bg-white p-4 rounded-t-3xl overflow-hidden mt-10">
            <div class="h-[calc(100vh-270px)]">
              <div class="bg-[#ECDCDC] text-zinc-800 rounded-2xl mb-4 p-4">
                <div class="min-h-[72px] max-h-[72px] overflow-auto leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus praesentium debitis, dignissimos voluptatem dolorem alias. At vitae quidem doloribus sequi eaque, maiores id nostrum minus ad vel debitis, distinctio perspiciatis! Illum quia quod a voluptas corporis, sunt necessitatibus. Rerum distinctio sunt vel minus ullam laudantium quasi similique magnam fugit veritatis? Officiis dolore veritatis rem quisquam unde ratione aspernatur deleniti mollitia quia, exercitationem aliquam, quibusdam delectus aut repellat cum quos earum culpa nesciunt at eveniet corrupti? Hic atque temporibus vero eveniet, illum officiis obcaecati sunt ea doloribus a aliquam repellat natus eius, beatae blanditiis sequi perferendis consectetur optio. Molestiae mollitia quam aliquid, commodi obcaecati aut animi illum, veniam quaerat similique quos tenetur non modi saepe deserunt eveniet consequuntur debitis maiores ipsum, enim aperiam. Quas ipsum enim numquam placeat cum corrupti ipsam iusto saepe expedita at! Iusto reprehenderit praesentium nemo totam veritatis nesciunt, obcaecati quae vel quisquam asperiores magnam, nobis rem repellendus voluptatem sed explicabo ullam eius rerum inventore qui? Fugit saepe odit aliquid totam nobis eum libero reiciendis distinctio, quam animi tempore minima autem, nemo nesciunt dignissimos voluptate pariatur ducimus, quidem amet molestiae? Aliquid commodi at molestias earum unde error nam nihil accusamus delectus, harum hic? Nostrum possimus enim a repellat rem facere eveniet repudiandae, beatae voluptate odio autem nemo distinctio culpa tempora odit officia! Voluptatem laborum veniam voluptas, tempora fuga, reiciendis ut fugiat aliquid eveniet officia similique exercitationem. Modi eum quos dolores tempore laboriosam veritatis! Sint impedit magnam exercitationem iure laborum pariatur facilis, deleniti ad esse perferendis itaque voluptates eius, quasi aspernatur repellat, quidem placeat. Officia error quia dolore! Eaque amet excepturi adipisci nemo dignissimos architecto non natus ducimus, et illo libero neque itaque eveniet eius ab quo suscipit corrupti veritatis. Nesciunt soluta reiciendis dicta porro nulla, assumenda necessitatibus. Sunt corporis blanditiis architecto accusamus illo! Ipsa repudiandae provident ab unde? Natus, consectetur quis sequi dolorem aliquam veritatis voluptatum cupiditate, officiis ea nulla vitae corrupti quia? Quidem fugit pariatur, doloremque at, impedit sed ducimus ipsa vero repudiandae expedita sit facere officiis numquam ipsam debitis labore suscipit incidunt nobis sequi nostrum accusamus facilis voluptatem eos cum! Sed at nostrum, necessitatibus nemo, quo adipisci dolorum beatae magni debitis atque possimus iusto, illo cum cupiditate unde sunt! In tempora eligendi vitae non minima expedita blanditiis facilis exercitationem, sed quam quo iusto animi, sapiente dolorem deserunt voluptatem illo. Corporis aliquam accusamus iusto voluptatem amet ipsum consectetur qui, nostrum aperiam nihil eaque deleniti veniam animi deserunt tenetur sint repudiandae nisi in, quasi sed. At voluptatibus vero hic numquam, animi sequi corrupti doloremque repudiandae, ea exercitationem tempora quam perferendis, ratione rerum accusantium! Ad ratione asperiores vitae repellendus velit eum beatae, cumque, officia ipsa alias esse laborum perferendis tenetur, fuga sint itaque impedit fugit maiores excepturi recusandae molestiae mollitia distinctio. Quisquam maiores blanditiis sit quibusdam aspernatur molestias. Corrupti, dolorum debitis? Veritatis velit ea dolorem consequuntur eius tempora, officia nihil unde dolorum repellendus harum sint est odio, voluptatum illo sapiente molestias perspiciatis quas. Sint repellendus facilis sequi? Mollitia, veritatis eligendi aperiam vel corporis molestias quasi corrupti veniam iure?
                </div>
              </div>
              <CustomRadio
                :items="fakeQuestions"
                @item-clicked="handleItemClicked"
                :class="'max-h-[calc(100vh-355px)] pb-20'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
  import { ref } from 'vue'
  import { IonPage } from '@ionic/vue'
  import CustomRadio from '@/components/CustomRadio.vue'

  export default {
    data() {
      return {
        tab: null,
        fakeQuestions: [
          { id: 1, title: 'Fusce auctor tortor semper quam Fusce auctor tortor semper quam', color: '#F6F0F0', active: false },
          { id: 2, title: 'Quisque sit amet velit eu arcu', color: '#F94848', active: true },
          { id: 3, title: 'Cras consectetur nibh in sollicitudin auctor', color: '#F6F0F0', active: false },
          { id: 4, title: 'Donec vitae condimentum dui', color: '#6CD647', active: false },
          { id: 5, title: 'Fusce auctor tortor semper quam Fusce auctor tortor semper quam', color: '#F6F0F0', active: false },
          { id: 6, title: 'Quisque sit amet velit eu arcu', color: '#F94848', active: false },
          { id: 7, title: 'Cras consectetur nibh in sollicitudin auctor', color: '#F6F0F0', active: false },
          { id: 8, title: 'Donec vitae condimentum dui', color: '#6CD647', active: false },
          { id: 9, title: 'Cras consectetur nibh in sollicitudin auctor', color: '#F6F0F0', active: false },
          { id: 10, title: 'Donec vitae condimentum dui', color: '#6CD647', active: false },
        ]
      }
    },
    components: {
      IonPage,
      CustomRadio
    },
    setup() {

      const count = ref(60);

      return {
        count
      }
    },
    methods: {
      handleItemClicked(items: any) {
        console.log(items)
        this.fakeQuestions = items;
      }
    },
    async mounted() {
      const countInterval = setInterval(() => {
        if(this.count > 0) {
          this.count = this.count - 1
        } else {
          clearInterval(countInterval)
        }
      }, 1000)
    }
  };
</script>

<style>
  .v-tab--selected .v-tab__slider {
    display: none;
    opacity: 0;
  }

  .v-btn--variant-flat {
    background-color: transparent;
    color: white;
  }

  .v-tab--selected.v-btn--variant-flat {
    background-color: white;
    color: #27272a;
  }
  
</style>