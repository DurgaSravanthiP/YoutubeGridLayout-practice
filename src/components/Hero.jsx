import { Sparkles } from "lucide-react";
function Hero() {
  return (
    <>
      <div className="bg-gray-50 py-10">
        <div className="flex justify-center pt-3">
          <div className="px-4 py-1 bg-white border rounded-full">
            <Sparkles className="inline-block h-4 w-4 text-green-900 mr-1" />
            CREATE FOR FAST
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center mt-5">
          <h1 className="text-5xl font-bold text-green-950 leading-tight">
            One tool to manage
            <br />
            contracts and your team
          </h1>

          <p className="mt-5 text-xl text-gray-600 leading-relaxed">
            Clause helps legal teams work faster, smarter and more efficiently,
            delivering the visibility and data-driven insights to mitigate risk
            and ensure compliance.
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <button className="px-8 py-2 bg-green-900 text-white rounded-xl">
              Start for Free
            </button>

            <button className="px-8 py-2 bg-white rounded-xl">
              Get a Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
