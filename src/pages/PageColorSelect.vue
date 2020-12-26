<template>
    <div class="q-pa-md">
        <div class="q-gutter-md">
            <q-carousel
                v-model="slide"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                control-color="white"
                navigation
                padding
                arrows
                height="300px"
                class="bg-secondary text-grey-9 shadow-1 rounded-borders"
            >
                <q-carousel-slide name="style" class="column no-wrap flex-center">
                    <q-icon name="style" size="56px" />
                    <div class="q-mt-md text-center text-h6">
                        금주의 인기 색상 조합
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="top1" class="column no-wrap flex-center">
                    <div class="absolute-top q-mx-lg q-my-lg text-h6">
                        인기 색상 TOP #1
                    </div>
                    
                    <div class="q-mt-md text-center">
                        <q-item>
                            <q-item-section class="q-pa-md">
                                <q-icon name="dashboard" size="56px" color="black" />
                                <q-item-label caption lines="1">Black</q-item-label>
                            </q-item-section>
                            <q-item-section class="q-mx-md">
                                <q-icon name="dashboard" size="56px" color="white" />
                                <q-item-label caption lines="1">White</q-item-label>
                            </q-item-section>
                        </q-item>
                        
                        <q-btn @click="$router.push({path: 'recommendations/1', params:{ rank: 1 }})">추천 코디 보러 가기</q-btn>
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="top2" class="column no-wrap flex-center">
                    <div class="absolute-top q-mx-lg q-my-lg text-h6">
                        인기 색상 TOP #2
                    </div>
                    
                    <div class="q-mt-md text-center">
                        <q-item>
                            <q-item-section class="q-pa-md">
                                <q-icon name="dashboard" size="56px" color="black" />
                                <q-item-label caption lines="1">Black</q-item-label>
                            </q-item-section>
                            <q-item-section class="q-mx-md">
                                <q-icon name="dashboard" size="56px" color="blue" />
                                <q-item-label caption lines="1">Blue</q-item-label>
                            </q-item-section>
                            <q-item-section class="q-mx-md">
                                <q-icon name="dashboard" size="56px" color="white" />
                                <q-item-label caption lines="1">White</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-btn @click="$router.push({path: 'recommendations/2', params:{ rank: 2 }})">추천 코디 보러 가기</q-btn>
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="top3" class="column no-wrap flex-center">
                    <div class="absolute-top q-mx-lg q-my-lg text-h6">
                        인기 색상 TOP #3
                    </div>
                    
                    <div class="q-mt-md text-center">
                        <q-item>
                            <q-item-section class="q-pa-md">
                                <q-icon name="dashboard" size="56px" color="blue" />
                                <q-item-label caption lines="1">Blue</q-item-label>
                            </q-item-section>
                            <q-item-section class="q-mx-md">
                                <q-icon name="dashboard" size="56px" color="white" />
                                <q-item-label caption lines="1">White</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-btn @click="$router.push({path: 'recommendations/3', params:{ rank: 3 }})">추천 코디 보러 가기</q-btn>
                    </div>
                </q-carousel-slide>
            </q-carousel>

        </div>
        <q-list>
            <q-item class="text-h6 q-mt-md">
                다른 인기 색상 조합
            </q-item>

            <q-separator spaced inset />

            <q-item>
                <q-item-section>
                    <q-item-label>Black | Yellow | White</q-item-label>
                    <q-item-label caption>
                        <q-icon name="arrow_right_alt" size="20px" />
                        총 32개의 코디조합 보러가기
                    </q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-btn round color="primary" icon="chevron_right" @click="$router.push({path: 'recommendations/5'})"/>
                </q-item-section>
            </q-item>

            <q-separator spaced inset />

            <q-item>
                <q-item-section>
                    <q-item-label>Black | Pink | White</q-item-label>
                    <q-item-label caption>
                        <q-icon name="arrow_right_alt" size="20px" />
                        총 21개의 코디조합 보러가기
                    </q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-btn round color="primary" icon="chevron_right" @click="$router.push({path: 'recommendations/8'})"/>
                </q-item-section>
            </q-item>

            <q-separator spaced inset />

            <q-item>
                <q-item-section>
                    <q-item-label>Brown | Black | White</q-item-label>
                    <q-item-label caption>
                        <q-icon name="arrow_right_alt" size="20px" />
                        총 13개의 코디조합 보러가기
                    </q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-btn round color="primary" icon="chevron_right" @click="$router.push({path: 'recommendations/9'})"/>
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>
<script>
import image from "../assets/background.png"

export default {
  data () {
    return {
      image: image,
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
