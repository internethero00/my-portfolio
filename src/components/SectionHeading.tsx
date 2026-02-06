interface SectionHeadingProps {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-blue-500 dark:bg-blue-400" />
    </div>
  )
}
