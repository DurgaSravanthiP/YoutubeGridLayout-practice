import { CircleCheck } from "lucide-react";
function Navbar() {
  return (
    <>
      <div className="w-full bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <div>
                <CircleCheck className="h-8 w-8" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Clause</h1>
            </div>

            <div className="flex items-center gap-8 text-gray-700">
              <div className="cursor-pointer hover:text-green-700">
                Solutions
              </div>

              <div className="cursor-pointer hover:text-green-700">
                Customers
              </div>

              <div className="cursor-pointer hover:text-green-700">Pricing</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2 rounded-xl font-medium text-green-900 bg-green-50 hover:bg-green-100">
              Log In
            </button>

            <button className="px-6 py-2 rounded-xl font-medium text-white bg-green-800 hover:bg-green-900">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
