import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export const Newsletter = () => (
  <div className="mt-6 md:mt-0">
    <h2 className="text-gray-800 text-xl font-semibold sm:text-2xl">
      Subscreva-se na nossa newsletter.
    </h2>
    <form className="mt-6 flex items-center gap-x-3">
      <div className="relative">
        <svg
          className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <Input
          type="email"
          required
          placeholder="Seu email"
          className="w-full pl-12 pr-3 focus:border-blue-600"
        />
      </div>
      <Button className="block w-auto text-white bg-primary hover:bg-primary/80 ring-offset-2 ring-primary focus:ring shadow rounded-lg">
        Subscrever-se
      </Button>
    </form>
  </div>
)
