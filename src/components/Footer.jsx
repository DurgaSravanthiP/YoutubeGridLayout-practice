import { SquarePen } from "lucide-react";
import { Square } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { Cog } from "lucide-react";

function Footer() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-gray-800">
              More than 100+ <br />
              companies partner
            </div>

            <div className="flex items-center gap-16">
              <div>HubSpot</div>
              <div className="flex items-center gap-2">
                <SquarePen />
                Dropbox
              </div>
              <div className="flex items-center gap-2">
                <Square />
                Square
              </div>
              <div className="flex items-center gap-2">
                <Cog />
                INTERCOM
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw />
                grammarly
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
