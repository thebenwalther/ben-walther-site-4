A coaching-package / pricing-tier card. Use three across; give the middle tier `featured` for the dark forest treatment and a `badge`.

```jsx
<ProgramCard
  tag="Three months" name="1:1 Coaching"
  price="$240 / session, every other week"
  description="Six sessions plus weekly accountability to make change actually stick."
  badge="Most popular" featured
  ctaLabel="Apply for 1:1"
/>
```

Composes `Button` internally (accent when featured, soft otherwise).
