const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
    ],
  },
]
export function AsideFilters() {
  return (
    <aside>
      <div className='hidden lg:block'>
        <form className='animate-pulse-loop space-y-10 divide-y divide-gray-200'>
          {filters.map((section) => (
            <div key={section.name} className={'pt-10'}>
              <fieldset>
                <legend className='block h-3 w-[90px] bg-gray-300' />
                <div className='space-y-3 pt-6'>
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className='flex items-center'>
                      <div
                        id={`${section.id}-${optionIdx}`}
                        defaultValue={option.value}
                        className='h-4 w-4 rounded border-gray-300 bg-gray-200'
                      />
                      <label
                        htmlFor={`${section.id}-${optionIdx}`}
                        className='ml-3 h-3 w-[120px] animate-pulse bg-gray-200'
                      />
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          ))}
        </form>
      </div>
    </aside>
  )
}
