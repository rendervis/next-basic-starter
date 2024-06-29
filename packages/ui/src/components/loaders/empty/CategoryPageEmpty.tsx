const products = [
  {
    id: 1,
    name: '###### ### ####',
    href: '#',
    price: '###',
    description:
      '### ### #### ###### ## ### ##### ####. #### # #### ##### ### ####, ### ## ##### ### ###### ###.',
    options: '#####',
    imageSrc: '',
    imageAlt: '',
  },
  {
    id: 2,
    name: '##### ###',
    href: '#',
    price: '###',
    description:
      '#### #### # ########## ### ### #### ### ##### ##### #-#### ##### ###.',
    options: '#####',
    imageSrc: '',
    imageAlt: ' ',
  },
  {
    id: 3,
    name: '##### ###',
    href: '#',
    price: '###',
    description:
      '#### #### # ########## ### ### #### ### ##### ##### #-#### ##### ###.',
    options: '#####',
    imageSrc: '',
    imageAlt: ' ',
  },
  {
    id: 4,
    name: '##### ###',
    href: '#',
    price: '###',
    description:
      '#### #### # ########## ### ### #### ### ##### ##### #-#### ##### ###.',
    options: '#####',
    imageSrc: '',
    imageAlt: ' ',
  },
]

export function CategoryPageEmpty() {
  return (
    <div className='bg-white opacity-40 transition duration-[2000ms] '>
      <style>
        {`
           @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
          .animate-pulse-loop {
            animation: pulse 1.2s ease-out infinite;
          }
        `}
      </style>
      <div className='mx-auto mt-8 max-w-2xl px-4 lg:max-w-7xl lg:px-8'>
        <div className='flex animate-pulse flex-col items-center pb-10 pt-24'>
          <h1 className='animate-pulse-loop h-12 w-[248px] bg-gray-300' />
          <p className='mt-12 h-4 w-[512px] bg-gray-200' />
          <p className='mt-4 h-4 w-[320px] bg-gray-200' />
          <p className='mt-4 h-4 w-[480px] bg-gray-200' />
        </div>

        <div className='grid grid-cols-1 gap-4 pb-24 pt-12 lg:gap-x-8'>
          <section
            aria-labelledby='product-heading'
            className='mx-auto mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3'
          >
            <div className='mx-auto grid w-fit grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8'>
              {products.map((product) => (
                <div
                  key={product.id}
                  className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'
                >
                  <div className='aspect-h-4 aspect-w-3 sm:aspect-none  bg-gray-200 group-hover:opacity-75 sm:h-96'>
                    <div className='h-full w-full object-cover object-center sm:h-full sm:w-full' />
                  </div>
                  <div className='animate-pulse-loop flex flex-1 flex-col space-y-2 p-4 opacity-20'>
                    <h3 className='text-sm font-medium text-gray-900'>
                      {product.name}
                    </h3>
                    <p className='text-sm text-gray-500'>
                      {product.description}
                    </p>
                    <div className='flex flex-1 flex-col justify-end'>
                      <p className='text-sm italic text-gray-500'>
                        {product.options}
                      </p>
                      <p className='text-base font-medium text-gray-900'>
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
