import { BsCheckCircleFill } from "react-icons/bs";
const Faq = () => {
  return (
    <div className="px-6 md:px-48 mt-36">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div data-aos="fade-up">
            <h1 className="text-6xl font-bold">
              FAQ (Frequently Asked Questions)
            </h1>{" "}
            <br />
            <br />
            <p className="text-xl font-medium">
              Mauris ut lectus facilisi curabitur bibendum. Amet posuere proin
              tortor, duis porttitor habitant amet, rutrum. Egestas fermentum
              facilisi sit ut mi congue nunc neque mattis.
            </p>
            <br />
            <p className="text-xl font-medium">
              Sed donec dignissim neque vitae. Mauris tellus bibendum aliquet
              bibendum phasellus congue. Elit vulputate.
            </p>
            <br />
            <h3 className="flex text-xl my-2 font-medium">
              <BsCheckCircleFill className="mt-1 mr-6" /> Sit amet pharetra
              aliquet molestie.
            </h3>
            <h3 className="flex text-xl my-2 font-medium">
              <BsCheckCircleFill className="mt-1 mr-6" />
              Pellentesque vestibulum nisl donec at.
            </h3>
            <h3 className="flex text-xl my-2 font-medium">
              <BsCheckCircleFill className="mt-1 mr-6" />
              Vitae at mauris ultricies ut adipiscing.
            </h3>
            <h3 className="flex text-xl my-2 font-medium">
              <BsCheckCircleFill className="mt-1 mr-6" />
              Eleifend nec dolor sapien mi. Morbi.
            </h3>
          </div>
        </div>
        <div data-aos="flip-up" className="gap-8 mt-16 text-black">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-error rounded-xl my-3">
            <div className="collapse-title text-2xl font-bold">
              Can i cancel my subscription at any time?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Mauris ut lectus facilisi curabitur bibendum. Amet posuere proin
                tortor, duis porttitor habitant amet, rutrum. Egestas fermentum
                facilisi sit ut mi congue nunc neque mattis.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-error rounded-xl my-3">
            <div className="collapse-title text-2xl font-bold">
              How can I place an order for Marvel toys on your website?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Placing an order is easy! Simply browse our selection of Marvel
                toys, add your desired items to the shopping cart, and proceed
                to checkout. Follow the on-screen instructions to provide
                shipping details and payment information.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-error rounded-xl my-3">
            <div className="collapse-title text-2xl font-bold">
              What payment methods do you accept?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                We accept various payment methods, including credit cards (Visa,
                Mastercard, American Express), PayPal, and other secure online
                payment options.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-error rounded-xl my-3">
            <div className="collapse-title text-2xl font-bold">
              How much is shipping, and how long will it take to receive my
              order?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Shipping costs and delivery times may vary based on your
                location and the shipping method selected during checkout. We
                offer standard and express shipping options. Please refer to our
                Shipping & Delivery page for more detailed information.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-error rounded-xl my-3">
            <div className="collapse-title text-2xl font-bold">
              Do you offer gift wrapping services?
            </div>
            <div className="collapse-content">
              <p className="text-xl">
                Yes, we offer gift wrapping for an additional fee. During the
                checkout process, you can select the gift wrap option and
                include a personalized message for the recipient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
