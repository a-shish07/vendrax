import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

/* -------------------------------------------------------------------------- */
/*  Config                                                                    */
/* -------------------------------------------------------------------------- */

type Filter = 'all' | 'electronics' | 'clothing'
type Sort = 'featured' | 'price-asc' | 'price-desc' | 'name'

const filterTabs: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All products' },
  { key: 'electronics', label: 'Electronics' },
  { key: 'clothing', label: 'Clothing' },
]

const sortOptions: { key: Sort; label: string }[] = [
  { key: 'featured', label: 'Featured' },
  { key: 'price-asc', label: 'Price: low to high' },
  { key: 'price-desc', label: 'Price: high to low' },
  { key: 'name', label: 'Name: A to Z' },
]

/* -------------------------------------------------------------------------- */
/*  Icons                                                                     */
/* -------------------------------------------------------------------------- */

const iconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const SearchIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" {...iconProps} strokeWidth={2}>
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const CloseIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" {...iconProps} strokeWidth={2}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

const ChevronIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" {...iconProps} strokeWidth={2}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

const TruckIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" {...iconProps}>
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Products() {
  const [filter, setFilter] = useState<Filter>('all')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<Sort>('featured')

  const counts = useMemo(
    () => ({
      all: products.length,
      electronics: products.filter(p => p.category === 'electronics').length,
      clothing: products.filter(p => p.category === 'clothing').length,
    }),
    []
  )

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase()
    const list = products.filter(p => {
      const matchCat = filter === 'all' || p.category === filter
      const matchSearch = p.name.toLowerCase().includes(q)
      return matchCat && matchSearch
    })

    switch (sort) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price)
      case 'name':
        return [...list].sort((a, b) => a.name.localeCompare(b.name))
      default:
        return list
    }
  }, [filter, search, sort])

  const hasActiveFilters = filter !== 'all' || search.trim() !== ''

  const clearAll = () => {
    setFilter('all')
    setSearch('')
    setSort('featured')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ------------------------------ Header ----------------------------- */}
      <header className="relative overflow-hidden bg-brand">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pt-14 lg:px-8">
          <h1 className="font-display text-4xl text-white sm:text-5xl">Our products</h1>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-white/65">
            Premium quality electronics and clothing, all in one place.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
            <TruckIcon />
            Free shipping above ₹999, and pay on delivery
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {/* ----------------------------- Toolbar ---------------------------- */}
        <div className="relative z-10 -mt-8 rounded-2xl border border-border bg-white p-4 shadow-xl shadow-brand/10 sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Category filters */}
            <div
              role="group"
              aria-label="Filter by category"
              className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:pb-0"
            >
              {filterTabs.map(tab => {
                const active = filter === tab.key
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setFilter(tab.key)}
                    aria-pressed={active}
                    className={`flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/20 ${
                      active
                        ? 'border-brand bg-brand text-white'
                        : 'border-border bg-white text-slate-600 hover:border-brand hover:text-brand'
                    }`}
                  >
                    {tab.label}
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs ${
                        active ? 'bg-white/20 text-white' : 'bg-surface text-slate-500'
                      }`}
                    >
                      {counts[tab.key]}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Search */}
              <div className="relative w-full sm:w-64">
                <label htmlFor="product-search" className="sr-only">
                  Search products
                </label>
                <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="product-search"
                  type="search"
                  placeholder="Search products"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-border bg-white py-2.5 pl-10 pr-9 text-sm text-brand outline-none transition placeholder:text-slate-400 focus:border-accent focus:ring-4 focus:ring-accent/15 [&::-webkit-search-cancel-button]:appearance-none"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-surface hover:text-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/20"
                  >
                    <CloseIcon className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Sort */}
              <div className="relative w-full sm:w-52">
                <label htmlFor="product-sort" className="sr-only">
                  Sort products
                </label>
                <select
                  id="product-sort"
                  value={sort}
                  onChange={e => setSort(e.target.value as Sort)}
                  className="w-full appearance-none rounded-xl border border-border bg-white py-2.5 pl-4 pr-10 text-sm text-brand outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15"
                >
                  {sortOptions.map(o => (
                    <option key={o.key} value={o.key}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------- Results summary ------------------------ */}
        <div className="mb-6 mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-slate-500" aria-live="polite">
            Showing <span className="font-semibold text-brand">{visible.length}</span> of {products.length}{' '}
            products
          </p>
          {hasActiveFilters && visible.length > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="rounded-lg px-2 py-1 text-sm font-medium text-accent transition-colors hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/20"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* -------------------------------- Grid ---------------------------- */}
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-md flex-col items-center py-16 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
              <SearchIcon className="h-9 w-9" />
            </div>
            <h2 className="font-display text-2xl text-brand">No products found</h2>
            <p className="mt-2 leading-relaxed text-slate-500">
              {search.trim()
                ? `We couldn't find anything for "${search.trim()}". Check the spelling, try a shorter word, or browse all products.`
                : 'There are no products in this category yet. Try another category.'}
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="btn-primary mt-8 rounded-xl bg-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30"
            >
              Show all products
            </button>
          </div>
        )}
      </div>
    </div>
  )
}