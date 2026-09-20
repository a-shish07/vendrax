import {
  useEffect,
  useState,
  type MouseEvent,
} from 'react'
import { useApp } from '../App'
import type { Product } from '../data/products'

interface ProductCardProps {
  product: Product
}

interface StarRatingProps {
  rating: number
  reviews: number
  compact?: boolean
}

function StarRating({
  rating,
  reviews,
  compact = false,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} ${
              star <= Math.round(rating)
                ? 'text-accent fill-accent'
                : 'text-slate-200 fill-slate-200'
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 1.5l2.63 5.32 5.87.85-4.25 4.14 1 5.85L10 14.9l-5.25 2.76 1-5.85L1.5 7.67l5.87-.85L10 1.5z" />
          </svg>
        ))}
      </div>

      {reviews > 0 && (
        <span className="text-[10px] sm:text-xs text-slate-400">
          ({reviews})
        </span>
      )}
    </div>
  )
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, wishlist, toggleWishlist } = useApp()

  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [quickView, setQuickView] = useState(false)

  const isWishlisted = wishlist?.some(
    (item: Product) => item.id === product.id
  )

  /*
   * Discount
   */
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : 0

  /*
   * Small fake low-stock signal.
   * Keeps the UI visually useful without changing your product data.
   */
  const lowStock = product.id % 3 === 0

  /*
   * Lock page scrolling when Quick View is open.
   */
  useEffect(() => {
    if (!quickView) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setQuickView(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', handleEscape)
    }
  }, [quickView])

  /*
   * Add product to cart
   */
  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product)
    }

    setAdded(true)

    window.setTimeout(() => {
      setAdded(false)
    }, 1600)
  }

  /*
   * Wishlist
   */
  const handleWishlist = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation()
    toggleWishlist(product)
  }

  
  /*
   * Quick View
   */
  const handleOpenQuickView = (
    event?: React.MouseEvent<HTMLButtonElement>
  ) => {
    event?.stopPropagation()
    setQuickView(true)
  }

  /*
   * Close Quick View
   */
  const handleCloseQuickView = () => {
    setQuickView(false)
  }

  return (
    <>
      {/* =========================================================
          PRODUCT CARD
      ========================================================= */}
      <article
        onClick={handleOpenQuickView}
        className="
          group
          relative
          flex
          h-full
          cursor-pointer
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-brand/15
          hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]
        "
      >
        {/* -------------------------------------------------------
            IMAGE AREA
        ------------------------------------------------------- */}
        <div className="relative aspect-square overflow-hidden bg-surface">
          <img
            src={product.image}
            alt={product.name}
            className="
              h-full
              w-full
              object-contain
              p-4
              sm:p-6
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* Top-left labels */}
          <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5 sm:left-3 sm:top-3">
            {discount > 0 && (
              <span
                className="
                  inline-flex
                  w-fit
                  items-center
                  rounded-full
                  bg-brand
                  px-2
                  py-1
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  sm:text-[10px]
                "
              >
                -{discount}%
              </span>
            )}

            {lowStock && (
              <span
                className="
                  inline-flex
                  w-fit
                  items-center
                  rounded-full
                  border
                  border-white/80
                  bg-white/90
                  px-2
                  py-1
                  text-[9px]
                  font-semibold
                  text-slate-600
                  shadow-sm
                  backdrop-blur-sm
                  sm:text-[10px]
                "
              >
                Low stock
              </span>
            )}
          </div>

         

          {/* -----------------------------------------------------
              QUICK VIEW
          ----------------------------------------------------- */}
          <button
            type="button"
            onClick={handleOpenQuickView}
            className="
              absolute
              bottom-3
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              gap-1.5
              rounded-full
              border
              border-border
              bg-white/95
              px-3.5
              py-2
              text-[11px]
              font-semibold
              text-brand
              opacity-0
              shadow-lg
              backdrop-blur-sm
              transition-all
              duration-300
              group-hover:flex
              group-hover:opacity-100
              sm:bottom-4
            "
          >
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"
              />
              <circle cx="12" cy="12" r="2.5" />
            </svg>

            Quick View
          </button>
        </div>

        {/* -------------------------------------------------------
            CONTENT
        ------------------------------------------------------- */}
        <div className="flex flex-1 flex-col p-3 sm:p-4">
          {/* Category */}
          <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
            {product.category}
          </p>

          {/* Name */}
          <h3
            className="
              line-clamp-2
              min-h-[2.4rem]
              text-xs
              font-semibold
              leading-5
              text-brand
              transition-colors
              group-hover:text-accent
              sm:min-h-[2.75rem]
              sm:text-sm
              sm:leading-5
            "
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mt-2">
            <StarRating
              rating={product.rating}
              reviews={product.reviews}
              compact
            />
          </div>

          {/* Price */}
          <div className="mt-3 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
            <span className="text-base font-bold tracking-tight text-brand sm:text-lg">
              ₹{product.price.toLocaleString('en-IN')}
            </span>

            {product.originalPrice &&
              product.originalPrice > product.price && (
                <span className="text-[10px] text-slate-400 line-through sm:text-xs">
                  ₹
                  {product.originalPrice.toLocaleString(
                    'en-IN'
                  )}
                </span>
              )}
          </div>

          {/* Saving */}
          {product.originalPrice &&
            product.originalPrice > product.price && (
              <p className="mt-0.5 text-[9px] font-medium text-accent sm:text-[10px]">
                Save ₹
                {(
                  product.originalPrice - product.price
                ).toLocaleString('en-IN')}
              </p>
            )}

          {/* Shipping */}
          <div className="mt-2 flex items-center gap-1.5 text-[9px] text-slate-400 sm:text-[10px]">
            <svg
              className="h-3 w-3 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"
              />
              <circle cx="7" cy="19" r="1.5" />
              <circle cx="18" cy="19" r="1.5" />
            </svg>

            Free shipping available
          </div>

          {/* -----------------------------------------------------
              ACTIONS
          ----------------------------------------------------- */}
          <div className="mt-auto pt-3 sm:pt-4">
            <div className="flex items-center gap-2">
              {/* Quantity */}
              <div
                className="
                  flex
                  h-9
                  shrink-0
                  items-center
                  overflow-hidden
                  rounded-lg
                  border
                  border-border
                  bg-surface
                  sm:h-10
                "
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() =>
                    setQty((value) => Math.max(1, value - 1))
                  }
                  className="
                    flex
                    h-full
                    w-7
                    items-center
                    justify-center
                    text-sm
                    text-slate-500
                    transition-colors
                    hover:bg-white
                    hover:text-brand
                    sm:w-8
                  "
                >
                  −
                </button>

                <span className="w-6 text-center text-xs font-semibold text-brand">
                  {qty}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQty((value) => value + 1)
                  }
                  className="
                    flex
                    h-full
                    w-7
                    items-center
                    justify-center
                    text-sm
                    text-slate-500
                    transition-colors
                    hover:bg-white
                    hover:text-brand
                    sm:w-8
                  "
                >
                  +
                </button>
              </div>

              {/* Add to cart */}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  handleAddToCart()
                }}
                className={`
                  flex
                  h-9
                  min-w-0
                  flex-1
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  px-2.5
                  text-[10px]
                  font-bold
                  transition-all
                  duration-200
                  sm:h-10
                  sm:text-xs
                  ${
                    added
                      ? 'bg-accent text-white'
                      : 'bg-brand text-white hover:bg-brand/90'
                  }
                `}
              >
                {added ? (
                  <>
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12.5l4 4L19 7"
                      />
                    </svg>
                    Added
                  </>
                ) : (
                  <>
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4h2l2.4 11.2a2 2 0 002 1.6h7.8a2 2 0 001.9-1.4L21 8H6"
                      />
                      <circle cx="9" cy="20" r="1" />
                      <circle cx="18" cy="20" r="1" />
                    </svg>
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================
          QUICK VIEW MODAL
      ========================================================= */}
      {quickView && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-brand/70
            p-3
            backdrop-blur-sm
            sm:p-6
          "
          onClick={handleCloseQuickView}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Quick view of ${product.name}`}
            onClick={(event) => event.stopPropagation()}
            className="
              relative
              max-h-[94vh]
              w-full
              max-w-5xl
              overflow-y-auto
              rounded-2xl
              bg-white
              shadow-[0_30px_100px_rgba(0,0,0,0.25)]
              sm:rounded-3xl
            "
          >
            {/* ---------------------------------------------------
                CLOSE BUTTON
            --------------------------------------------------- */}
            <button
              type="button"
              onClick={handleCloseQuickView}
              aria-label="Close quick view"
              className="
                absolute
                right-3
                top-3
                z-20
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-white/95
                text-slate-500
                shadow-sm
                transition-colors
                hover:text-brand
                sm:right-5
                sm:top-5
              "
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* =================================================
                  MODAL IMAGE
              ================================================= */}
              <div className="bg-surface p-5 sm:p-8 lg:p-10">
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-border bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-full
                      w-full
                      object-contain
                      p-8
                      sm:p-12
                      lg:p-14
                    "
                  />

                  {discount > 0 && (
                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-brand
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wide
                        text-white
                      "
                    >
                      {discount}% OFF
                    </span>
                  )}
                </div>

                {/* Small image indicator */}
                
              </div>

              {/* =================================================
                  MODAL DETAILS
              ================================================= */}
              <div className="flex flex-col p-5 sm:p-8 lg:p-10">
                {/* Eyebrow */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-px w-6 bg-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                    Quick View
                  </span>
                </div>

                {/* Category */}
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  {product.category}
                </p>

                {/* Name */}
                <h2 className="mt-2 pr-8 font-display text-2xl leading-tight text-brand sm:text-3xl">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-3">
                  <StarRating
                    rating={product.rating}
                    reviews={product.reviews}
                  />

                  <span className="text-xs text-slate-400">
                    {product.rating.toFixed(1)} rating
                  </span>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-border" />

                {/* Price */}
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-2xl font-bold tracking-tight text-brand sm:text-3xl">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>

                    {product.originalPrice &&
                      product.originalPrice >
                        product.price && (
                        <span className="text-sm text-slate-400 line-through">
                          ₹
                          {product.originalPrice.toLocaleString(
                            'en-IN'
                          )}
                        </span>
                      )}
                  </div>

                  {product.originalPrice &&
                    product.originalPrice >
                      product.price && (
                      <p className="mt-1 text-xs font-semibold text-accent">
                        You save ₹
                        {(
                          product.originalPrice -
                          product.price
                        ).toLocaleString('en-IN')}{' '}
                        ({discount}%)
                      </p>
                    )}
                </div>

                {/* Benefits */}
                <div className="mt-6 grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl border border-border bg-surface p-3">
                    <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-white text-brand">
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"
                        />
                        <circle cx="7" cy="19" r="1.5" />
                        <circle cx="18" cy="19" r="1.5" />
                      </svg>
                    </div>

                    <p className="text-[10px] font-semibold text-brand">
                      Free Shipping
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-400">
                      On eligible orders
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-surface p-3">
                    <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-white text-brand">
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v18M17 7H9.5a3 3 0 100 6H15a3 3 0 110 6H7"
                        />
                      </svg>
                    </div>

                    <p className="text-[10px] font-semibold text-brand">
                      Secure Payment
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-400">
                      Safe checkout
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-5 flex items-center justify-between rounded-xl border border-border px-3.5 py-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        lowStock
                          ? 'bg-accent'
                          : 'bg-emerald-500'
                      }`}
                    />

                    <span className="text-xs font-medium text-brand">
                      {lowStock
                        ? 'Limited availability'
                        : 'In stock'}
                    </span>
                  </div>

                  <span className="text-[10px] text-slate-400">
                    Ready to ship
                  </span>
                </div>

                {/* Quantity + CTA */}
                <div className="mt-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Quantity
                  </p>

                  <div className="flex gap-2.5">
                    <div className="flex h-11 items-center overflow-hidden rounded-xl border border-border bg-surface">
                      <button
                        type="button"
                        onClick={() =>
                          setQty((value) =>
                            Math.max(1, value - 1)
                          )
                        }
                        className="flex h-full w-9 items-center justify-center text-slate-500 transition-colors hover:bg-white hover:text-brand"
                      >
                        −
                      </button>

                      <span className="w-8 text-center text-sm font-semibold text-brand">
                        {qty}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setQty((value) => value + 1)
                        }
                        className="flex h-full w-9 items-center justify-center text-slate-500 transition-colors hover:bg-white hover:text-brand"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className={`
                        flex
                        h-11
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        text-sm
                        font-bold
                        transition-all
                        ${
                          added
                            ? 'bg-accent text-white'
                            : 'bg-brand text-white hover:bg-brand/90'
                        }
                      `}
                    >
                      {added ? (
                        <>
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12.5l4 4L19 7"
                            />
                          </svg>
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 4h2l2.4 11.2a2 2 0 002 1.6h7.8a2 2 0 001.9-1.4L21 8H6"
                            />
                            <circle cx="9" cy="20" r="1" />
                            <circle cx="18" cy="20" r="1" />
                          </svg>
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>


                {/* Trust */}
                <div className="mt-5 flex items-center justify-center gap-4 border-t border-border pt-4">
                  <span className="flex items-center gap-1.5 text-[9px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Quality assured
                  </span>

                  <span className="h-3 w-px bg-border" />

                  <span className="flex items-center gap-1.5 text-[9px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Secure checkout
                  </span>

                  <span className="h-3 w-px bg-border" />

                  <span className="flex items-center gap-1.5 text-[9px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Easy returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}