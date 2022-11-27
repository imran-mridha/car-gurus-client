import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blog");
  return (
    <div className="space-y-4 w-11/12 md:w-9/12 mx-auto my-20">
      <h2 className="mb-12 text-3xl font-semibold leading-none text-center sm:text-5xl">
        Questions & Answers
      </h2>
      <details className="group border-l-4 border-primary bg-gray-50 p-6" open>
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            What are the different ways to manage a state in a React
            application?
          </h2>

          <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-primary sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          There are four main types of state you need to properly manage in your
          React apps:
        </p>
        <ul className="list-disc px-5">
          <li>Local state</li>
          <li>Global state</li>
          <li>Server state</li>
          <li>URL state</li>
        </ul>
        <p className="mt-3">
          <strong>Local (UI) state</strong> – Local state is data we manage in
          one or another component. Local state is most often managed in React
          using the useState hook. For example, local state would be needed to
          show or hide a modal component or to track values for a form
          component, such as form submission, when the form is disabled and the
          values of a form’s inputs.
        </p>
        <p className="mt-3">
          <strong>Global (UI) state</strong> – Global state is data we manage
          across multiple components. Global state is necessary when we want to
          get and update data anywhere in our app, or in multiple components at
          least. A common example of global state is authenticated user state.
          If a user is logged into our app, it is necessary to get and change
          their data throughout our application. Sometimes state we think should
          be local might become global.
        </p>
        <p className="mt-3">
          <strong>Server state –</strong> Data that comes from an external
          server that must be integrated with our UI state. Server state is a
          simple concept, but can be hard to manage alongside all of our local
          and global UI state. There are several pieces of state that must be
          managed every time you fetch or update data from an external server,
          including loading and error state. Fortunately there are tools such as
          SWR and React Query that make managing server state much easier.
        </p>
        <p className="mt-3">
          <strong>URL state –</strong> Data that exists on our URLs, including
          the pathname and query parameters. URL state is often missing as a
          category of state, but it is an important one. In many cases, a lot of
          major parts of our application rely upon accessing URL state. Try to
          imagine building a blog without being able to fetch a post based off
          of its slug or id that is located in the URL! There are undoubtedly
          more pieces of state that we could identify, but these are the major
          categories worth focusing on for most applications you build.
        </p>
      </details>

      <details className="group border-l-4 border-primary bg-gray-50 p-6">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            How does prototypical inheritance work?
          </h2>

          <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-primary sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          Every object with its methods and properties contains an internal and
          hidden property known as [[Prototype]]. The Prototypal Inheritance is
          a feature in javascript used to add methods and properties in objects.
          It is a method by which an object can inherit the properties and
          methods of another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object.getPrototypeOf and
          Object.setPrototypeOf. Nowadays, in modern language, it is being set
          using __proto__.
        </p>
      </details>
      <details className="group border-l-4 border-primary bg-gray-50 p-6">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            What is a unit test? Why should we write unit tests?
          </h2>

          <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-primary sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          To justify any effort in business, there must be a positive impact on
          the bottom line. Here are a few benefits to writing unit tests:
        </p>
        <ul className="list-disc px-5">
          <li>
            Unit tests save time and money. Usually, we tend to test the happy
            path more than the unhappy path. If you release such an app without
            thorough testing, you would have to keep fixing issues raised by
            your potential users. The time to fix these issues could’ve been
            used to build new features or optimize the existing system. Bear in
            mind that fixing bugs without running tests could also introduce new
            bugs into the system.
          </li>
          <li>
            Well-written unit tests act as documentation for your code. Any
            developer can quickly look at your tests and know the purpose of
            your functions.
          </li>
          <li>It simplifies the debugging process.</li>
          <li>
            Unit testing is an integral part of extreme programming. Extreme
            programming is basically a “test-everything-that-can-possibly-break”
            programming strategy.
          </li>
          <li>
            Unit tests make code reuse easier. If you want to reuse existing
            code in a new project, you can simply migrate both the code and
            tests to your new project, then run your tests to make sure you have
            the desired results.
          </li>
          <li>
            Unit testing improves code coverage. A debatable topic is to have
            100% code coverage across your application.
          </li>
          <li>
            In the testing pyramid, unit tests are faster than integration and
            end-to-end. They are more assertive and return quick feedback.{" "}
          </li>
        </ul>
      </details>
      <details className="group border-l-4 border-primary bg-gray-50 p-6">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            React vs. Angular vs. Vue?
          </h2>

          <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-primary sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>
        <h2 className="text-2xl font-semibold">React</h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          React can be used as a UI library to render elements, without
          enforcing a specific project structure, and that’s why it’s not
          strictly a framework. React Elements are the smallest building blocks
          of React apps. They are more powerful than DOM elements because the
          React DOM makes sure to update them efficiently whenever something
          changes. Components are larger building blocks that define independent
          and reusable pieces to be used throughout the application. They accept
          inputs called props and produce elements that are then displayed to
          the user. React is based on JavaScript, but it’s mostly combined with
          JSX (JavaScript XML), a syntax extension that allows you to create
          elements that contain HTML and JavaScript at the same time. Anything
          you create with JSX could also be created with the React JavaScript
          API, but most developers prefer JSX because it’s more intuitive.
        </p>
        <h2 className="text-2xl font-semibold mt-3">Vue</h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          The Vue.js core library focuses on the View layer only. It’s called a
          progressive framework because you can extend its functionality with
          official and third-party packages, such as Vue Router or Vuex, to turn
          it into an actual framework. Although Vue is not strictly associated
          with the MVVM (Model-View-ViewModel) pattern, its design was partly
          inspired by it. With Vue, you’ll be working mostly on the ViewModel
          layer, to make sure that the application data is processed in a way
          that allows the framework to render an up-to-date View. Vue’s
          templating syntax lets you create View components, and it combines
          familiar HTML with special directives and features. This templating
          syntax is preferred, even though raw JavaScript and JSX are also
          supported. Components in Vue are small, self-contained, and can be
          reused throughout the application. Single File Components (SFCs) with
          the .vue extension contain HTML, CSS, and JavaScript so that all
          relevant code resides in one file. SFCs are the recommended way to
          organize code in Vue.js projects, especially larger ones. Tools such
          as Webpack or Browserify are required to transpile SFCs into working
          JavaScript code.
        </p>
        <h2 className="text-2xl font-semibold mt-3">Angular</h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          In this article, I’m discussing Angular 2, and not the first version
          of the framework which is now known as AngularJS. AngularJS, the
          original framework, is an MVC (Model-View-Controller)) framework. But
          in Angular 2, there’s no strict association with MV*-patterns as it is
          also component-based. Projects in Angular are structured into Modules,
          Components, and Services. Each Angular application has at least one
          root component and one root module. Each component in Angular contains
          a Template, a Class that defines the application logic, and MetaData
          (Decorators). The metadata for a component tells Angular where to find
          the building blocks that it needs to create and present its view.
          Angular templates are written in HTML but can also include Angular
          template syntax with special directives to output reactive data and
          render multiple elements, among other things. Services in Angular are
          used by Components to delegate business-logic tasks such as fetching
          data or validating input. They are a distinct part of Angular
          applications. While Angular doesn’t enforce their use, it’s highly
          suggested to structure apps as a set of distinct services that can be
          reused. Angular is built in TypeScript, so its use is recommended to
          get the most seamless experience, but plain JavaScript is also
          supported.
        </p>
      </details>
    </div>
  );
};

export default Blogs;
