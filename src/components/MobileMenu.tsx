interface MobileMenuProps {
  open: boolean
  items: readonly { id: string; label: string }[]
  onClose: () => void
}

export default function MobileMenu({ open, items, onClose }: MobileMenuProps) {
  if (!open) return null

  return (
    <>
      {/* Backdrop — closes menu on tap */}
      <div
        className="fixed inset-0 z-40 bg-black/20 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div className="animate-slide-in fixed inset-x-0 top-[57px] bottom-0 z-50 bg-white/95 backdrop-blur-md dark:bg-gray-900/95 md:hidden">
        <nav className="flex flex-col items-center gap-2 px-6 pt-8">
          {items.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={onClose}
              className="w-full rounded-lg py-3 text-center text-lg font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
