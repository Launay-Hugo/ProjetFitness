import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SquatView from '@/views/mouvements/SquatView.vue'
import JumpingJackView from '@/views/mouvements/JumpingJackView.vue'
import MountainClimberView from '@/views/mouvements/MountainClimberView.vue'
import BurpeesView from '@/views/mouvements/BurpeesView.vue'
import PontView from '@/views/mouvements/PontView.vue'
import FenteView from '@/views/mouvements/FenteView.vue'
import DipsView from '@/views/mouvements/DipsView.vue'
import CrunchView from '@/views/mouvements/CrunchView.vue'
import AvionView from '@/views/mouvements/AvionView.vue'
import PlancheView from '@/views/mouvements/PlancheView.vue'
import TwistsRusseView from '@/views/mouvements/TwistsRusseView.vue'
import SilverView from '@/views/SilverView.vue'
import SquatWithJumpView from '@/views/mouvements/SquatWithJumpView.vue'
import PompeView from '@/views/mouvements/PompeView.vue'
import PlancheLatéralView from '@/views/mouvements/PlancheLatéralView.vue'
import CrunchCroiséView from '@/views/mouvements/CrunchCroiséView.vue'
import CrunchVeloView from '@/views/mouvements/CrunchVeloView.vue'
import FenteReverenceView from '@/views/mouvements/FenteReverenceView.vue'
import KneePompeView from '@/views/mouvements/KneePompeView.vue'
import GoldView from '@/views/GoldView.vue'
import PlancheDynamiqueView from '@/views/mouvements/PlancheDynamiqueView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import PlatiniumView from '@/views/PlatiniumView.vue'
import DiamondView from '@/views/DiamondView.vue'
import BronzeView from '@/views/BronzeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bronze',
      name: 'bronze',
      component: BronzeView,
    },
    {
      path: '/silver',
      name: 'silver',
      component: SilverView,
    },
    {
      path: '/gold',
      name: 'gold',
      component: GoldView,
    },
    {
      path: '/platinium',
      name: 'platinium',
      component: PlatiniumView,
    },
    {
      path: '/diamond',
      name: 'diamond',
      component: DiamondView,
    },
    {
      path: '/squat',
      name: 'squat',
      component: SquatView,
    },
    {
      path: '/mountainClimber',
      name: 'mountainClimber',
      component: MountainClimberView,
    },
    {
      path: '/jumpingJack',
      name: 'jumpingJack',
      component: JumpingJackView,
    },
    {
      path: '/burpees',
      name: 'burpees',
      component: BurpeesView,
    },
    {
      path: '/pont',
      name: 'pont',
      component: PontView,
    },
    {
      path: '/fente',
      name: 'fente',
      component: FenteView,
    },
    {
      path: '/dips',
      name: 'dips',
      component: DipsView,
    },
    {
      path: '/crunch',
      name: 'crunch',
      component: CrunchView,
    },
    {
      path: '/avion',
      name: 'avion',
      component: AvionView,
    },
    {
      path: '/planche',
      name: 'planche',
      component: PlancheView,
    },
    {
      path: '/twistsRusse',
      name: 'twistsRusse',
      component: TwistsRusseView,
    },
    {
      path: '/squatWithJump',
      name: 'squatWithJump',
      component: SquatWithJumpView,
    },
    {
      path: '/pompe',
      name: 'pompe',
      component: PompeView,
    },
    {
      path: '/plancheLateral',
      name: 'plancheLateral',
      component: PlancheLatéralView,
    },
    {
      path: '/cruchCroise',
      name: 'crunchCroise',
      component: CrunchCroiséView,
    },
     {
      path: '/cruchVelo',
      name: 'crunchVelo',
      component: CrunchVeloView,
    },
    {
      path: '/fenteReverence',
      name: 'fenteReverence',
      component: FenteReverenceView,
    },
    {
      path: '/kneePompe',
      name: 'kneePompe',
      component: KneePompeView,
    },
    {
      path: '/plancheDynamique',
      name: 'plancheDynamique',
      component: PlancheDynamiqueView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
