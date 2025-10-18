"use client"

import Image from "next/image";

export default function Testimoni() {
  return (
    <section className="bg-white" id="testimoni">
      <div className="mt-8 px-4 mx-auto max-w-screen-xl text-center lg:mt-16 lg:px-6 font-serif">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
            Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind
          </p>
        </div>

        <div className="grid mb-4 lg:mb-6 lg:grid-cols-2">
          {/* 1 */}
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-900">
              <h3 className="text-lg font-semibold text-black">
                Speechless with how easy this was to integrate
              </h3>
              <p className="my-4">
                &quot;I recently got my hands on Flowbite Pro, and holy crap, I&apos;m speechless with how easy this was to integrate within my application...
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                className="w-9 h-9 rounded-full"
                src="/favicon.ico"
                alt="profile picture"
                width={36}
                height={36}
              />
              <div className="space-y-0.5 font-medium text-left text-gray-700">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>

          {/* 2 */}
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-900">
              <h3 className="text-lg font-semibold text-black">
                Solid foundation for any project
              </h3>
              <p className="my-4">
                &quot;FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework...&quot;
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                className="w-9 h-9 rounded-full"
                src="/favicon.ico"
                alt="profile picture"
                width={36}
                height={36}
              />
              <div className="space-y-0.5 font-medium text-left text-gray-700">
                <div>Roberta Casas</div>
                <div className="text-sm font-light text-gray-500">
                  Lead designer at Dropbox
                </div>
              </div>
            </figcaption>
          </figure>

          {/* 3 */}
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-900">
              <h3 className="text-lg font-semibold text-black">
                Speechless with how easy this was to integrate
              </h3>
              <p className="my-4">
                &quot;I recently got my hands on Flowbite Pro, and holy crap, I&apos;m speechless with how easy this was to integrate within my application...
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                className="w-9 h-9 rounded-full"
                src="/favicon.ico"
                alt="profile picture"
                width={36}
                height={36}
              />
              <div className="space-y-0.5 font-medium text-left text-gray-700">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>

          {/* 4 */}
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-900">
              <h3 className="text-lg font-semibold text-black">
                Speechless with how easy this was to integrate
              </h3>
              <p className="my-4">
                &quot;I recently got my hands on Flowbite Pro, and holy crap, I&apos;m speechless with how easy this was to integrate within my application...
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                className="w-9 h-9 rounded-full"
                src="/favicon.ico"
                alt="profile picture"
                width={36}
                height={36}
              />
              <div className="space-y-0.5 font-medium text-left text-gray-700">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
