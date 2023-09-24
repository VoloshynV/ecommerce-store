export const HomePageSkeleton = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="relative aspect-square animate-pulse rounded-xl bg-gray-300 p-4 sm:p-6 md:aspect-[2.4/1] lg:p-8" />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="h-9 w-1/2 animate-pulse bg-gray-300 md:w-1/3 lg:w-1/4" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array(6)
              .fill(null)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="animate-pulse space-y-4 rounded-xl bg-gray-300 p-3"
                >
                  <div className="relative aspect-square rounded-xl bg-gray-200" />
                  <div className="grid">
                    <p className="h-5 w-1/2 animate-pulse bg-gray-200" />
                    <p className="mt-1 h-4 w-1/4 animate-pulse bg-gray-200" />
                    <p className="mt-3 h-4 w-1/3 animate-pulse bg-gray-200" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
