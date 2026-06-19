'use client'

import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      await new Promise((r) => setTimeout(r, 300))

      // ── 0. Bypass RevealWrapper — GSAP owns all reveals ────────────
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        gsap.set(el, { opacity: 1, y: 0 })
        ;(el as HTMLElement).style.transition = 'none'
        ;(el as HTMLElement).style.animation = 'none'
      })

      // ── HELPERS ───────────────────────────────────────────────────

      // Subtle fade-up for individual elements (not whole sections)
      function fadeUp(el: Element, delay = 0) {
        gsap.fromTo(el as HTMLElement,
          { y: 28, opacity: 0 },
          {
            y: 0, opacity: 1, ease: 'none',
            scrollTrigger: {
              trigger: el as HTMLElement,
              start: 'top 90%',
              end: 'top 40%',
              scrub: 0.6,
            },
          }
        )
      }

      // Heading drifts gently upward as section scrolls out
      function drift(heading: Element, section: HTMLElement) {
        gsap.to(heading, {
          y: -30, ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
        })
      }

      // Cards stagger-rise from below, light effect
      function cardFade(grid: HTMLElement) {
        Array.from(grid.children).forEach((card, i) => {
          gsap.fromTo(card as HTMLElement,
            { y: 32, opacity: 0 },
            {
              y: 0, opacity: 1, ease: 'none',
              delay: i * 0.04,
              scrollTrigger: {
                trigger: card as HTMLElement,
                start: 'top 88%',
                end: 'top 38%',
                scrub: 0.6,
              },
            }
          )
        })
      }

      // ── 1. Hero: zoom + fade to black ────────────────────────────
      const heroEl      = document.querySelector('#top') as HTMLElement
      const heroMedia   = document.querySelector('.ia-hero-media') as HTMLElement
      const heroContent = document.querySelector('.ia-hero-content') as HTMLElement
      const darkFade    = document.querySelector('#ia-hero-dark-fade') as HTMLElement

      if (heroMedia && heroEl) {
        gsap.fromTo(heroMedia,
          { scale: 1 },
          { scale: 1.14, ease: 'none',
            scrollTrigger: { trigger: heroEl, start: 'top top', end: 'bottom top', scrub: 1 } }
        )
      }
      if (heroContent && heroEl) {
        gsap.to(heroContent, {
          opacity: 0, y: -20,
          scrollTrigger: { trigger: heroEl, start: 'top top', end: '35% top', scrub: 0.8 },
        })
      }
      if (darkFade && heroEl) {
        gsap.to(darkFade, {
          opacity: 1,
          scrollTrigger: { trigger: heroEl, start: '30% top', end: '90% top', scrub: 0.8 },
        })
      }

      // ── 2. WhoItsFor — no animation, fully visible ─────────────────

      // ── 2b. WhatYoullGet — static section, cards fade in ─────────
      const rewards = document.querySelector('#rewards') as HTMLElement | null
      if (rewards) {
        const h2 = rewards.querySelector('h2')
        if (h2) fadeUp(h2)
        rewards.querySelectorAll('.ia-grid-2col > *').forEach((card) => fadeUp(card))
      }

      // ── 3. TopCreators ────────────────────────────────────────────
      const creators = document.querySelector('#creators') as HTMLElement | null
      if (creators) {
        const h2 = creators.querySelector('h2')
        if (h2) drift(h2, creators)

        const avatars = creators.querySelectorAll('.ia-creators-grid > a')
        avatars.forEach((av) => fadeUp(av))
      }

      // ── 4. Community ──────────────────────────────────────────────
      const community = document.querySelector('#community') as HTMLElement | null
      if (community) {
        const h2 = community.querySelector('h2')
        if (h2) drift(h2, community)

        const cGrid = community.querySelector('.ia-community-grid') as HTMLElement | null
        if (cGrid) {
          const [c1, c2] = Array.from(cGrid.children)
          if (c1) gsap.fromTo(c1 as HTMLElement,
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, ease: 'none',
              scrollTrigger: { trigger: cGrid, start: 'top 88%', end: 'top 20%', scrub: 0.8 } }
          )
          if (c2) gsap.fromTo(c2 as HTMLElement,
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, ease: 'none',
              scrollTrigger: { trigger: cGrid, start: 'top 88%', end: 'top 20%', scrub: 0.8 } }
          )
        }
      }

      // ── 5. StatsBand ──────────────────────────────────────────────
      const statsBand = document.querySelector('#ia-stats') as HTMLElement | null
      if (statsBand) {
        gsap.fromTo(statsBand,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none',
            scrollTrigger: { trigger: statsBand, start: 'top 90%', end: 'top 30%', scrub: 0.7 } }
        )
      }

      // ── 6. Enterprise ─────────────────────────────────────────────
      const enterprise = document.querySelector('.ia-enterprise-inner') as HTMLElement | null
      if (enterprise) {
        gsap.fromTo(enterprise,
          { scale: 0.92, y: 50, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, ease: 'none',
            scrollTrigger: { trigger: enterprise, start: 'top 90%', end: 'top 18%', scrub: 0.8 } }
        )
      }

      // ── 7. CommunityCreations ─────────────────────────────────────
      const mcSec = document.querySelector('#community-creations') as HTMLElement | null
      if (mcSec) {
        const h2 = mcSec.querySelector('h2')
        if (h2) drift(h2, mcSec)
      }

      // ── 8. FAQ ────────────────────────────────────────────────────
      document.querySelectorAll('[class*="ia-faq"]').forEach((item) => {
        gsap.fromTo(item as HTMLElement,
          { x: -24, opacity: 0 },
          { x: 0, opacity: 1, ease: 'none',
            scrollTrigger: {
              trigger: item as HTMLElement,
              start: 'top 90%', end: 'top 55%', scrub: 0.6,
            } }
        )
      })
    }

    init()
  }, [])

  return null
}
