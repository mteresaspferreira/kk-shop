import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

export const ProductPolicies = () => {
  return (
    <>
      <div className="mt-8 border-t border-gray-200 pt-8">
        <h2 className="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>
      </div>
      <section aria-labelledby="policies-heading" className="mt-10">
        <h2 id="policies-heading" className="sr-only">
          Our Policies
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <dl>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
              <dt>
                <ChatBubbleBottomCenterTextIcon
                  className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span className="mt-4 text-sm font-medium text-gray-900">
                  Lorem Ipsum
                </span>
              </dt>
              <dd className="mt-1 text-sm text-gray-500">
                <p>Lorem ipsum dolor</p>
              </dd>
            </div>
          </dl>
          <dl>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
              <dt>
                <ChatBubbleBottomCenterTextIcon
                  className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span className="mt-4 text-sm font-medium text-gray-900">
                  Lorem Ipsum
                </span>
              </dt>
              <dd className="mt-1 text-sm text-gray-500">
                <p>Lorem ipsum dolor</p>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
};
