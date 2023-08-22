import styled from "styled-components";

/* Component ---------------------------*/
import Essay from "./Essay.jsx";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1: Explain the difference between HTML, CSS and JavaScript.">
                <ul>
                    <li>
                        HTML stands for hypertext markup language. It is used
                        for structure and describes the info it contains (e.g.,
                        headings describe the type of text in it). It consists
                        of a series of tags that enclose different elements such
                        as headings, paragraphs, images, links, tables, and
                        forms. It also provides the basic structure and
                        semantics of a web page but doesn't handle its visual
                        appearance or interactivity.
                    </li>
                    <li>
                        CSS is basically used for presentation & styling. It
                        provides a way to control the colors, fonts, layout, and
                        overall visual appearance of HTML elements.
                    </li>
                    <li>
                        JavaScript enables interactivity & dynamic behavior. It
                        creates complex behaviors, responds to user actions,
                        manipulates HTML and CSS, and interacts with server-side
                        APIs. Some of its uses include validating forms,
                        creating interactive elements like image sliders or
                        dropdown menus, handling events, making AJAX requests, &
                        more
                    </li>
                </ul>
            </Essay>

            <Essay question="Q2: What is the difference between Git and Github?">
                <ul>
                    <li>
                        Git is like a time machine for your files. It helps you
                        keep track of changes you make to your files over time.
                        You can create different versions of your files, work on
                        different features or fixes at the same time, and then
                        combine them later. It's a tool you use on your computer
                        to manage your files and their history.
                    </li>
                    <li>
                        GitHub is like a place on the internet where you can
                        store and share your files. It builds on Git and
                        provides a website where you can upload your files and
                        collaborate with others. It offers a user-friendly
                        interface to manage your files, track issues, and review
                        changes made by other people. You can easily share your
                        code with others and work together on projects. It
                        provides additional features like project management
                        tools, documentation, and integrations with other
                        services.
                    </li>
                    <li>
                        In summary, Git is the tool you use on your computer to
                        manage your files' history, while GitHub is a website
                        that makes it easy to store, collaborate, and share
                        those files with others.
                    </li>
                </ul>
            </Essay>

            <Essay question="Q3: What is the difference between JQuery and React?">
                <ul>
                    <li>
                        JQuery is a lightweight, cross-platform JavaScript
                        library primarily designed to simplify DOM manipulation
                        and handle browser inconsistencies. It is mainly used
                        for manipulating HTML, CSS, and handling events in a
                        more concise manner. It works on top of standard
                        JavaScript and provides an easier way to perform tasks
                        like selecting elements, adding animations, and making
                        AJAX requests. It is primarily focused on providing
                        browser compatibility and enhancing the user experience.
                        It is deal for small to medium-sized projects and when
                        working with existing web applications to add some
                        interactivity without significant architectural changes.
                    </li>
                    <li>
                        React is a robust and efficient JavaScript library for
                        building user interfaces, particularly for single-page
                        applications (SPAs). It utilizes a component-based
                        architecture, where UI components are created and
                        managed, promoting code reusability and maintainability.
                        It allows developers to build complex UIs by breaking
                        them into smaller, self-contained components, which
                        enhances scalability and makes code management easier.
                        It utilizes a virtual DOM, a lightweight representation
                        of the actual DOM, to optimize rendering performance by
                        updating only the necessary parts of the UI. It is often
                        used in conjunction with other libraries or frameworks
                        to handle additional tasks like state management (Redux)
                        and routing (React Router). It is suited for large-scale
                        applications and projects with a heavy focus on
                        front-end development and a preference for creating
                        reusable, structured components.
                    </li>
                    <li>
                        In short, jQuery is handy for simple tasks and quick
                        fixes, while React is more suitable for building bigger
                        and more interactive websites and web applications.
                    </li>
                </ul>
            </Essay>

            <Essay question="Q4: What is the difference between a Front-End and Back-End Developer?">
                <ul>
                    <li>
                        Front-end developers focus on the user interface (UI)
                        and user experience (UX) aspects of a website or web
                        application. They work with HTML, CSS, and JavaScript to
                        create the visual elements that users interact with
                        directly. They are responsible for designing and
                        implementing the layout, navigation, and overall look
                        and feel of the website or application. They also ensure
                        that the front-end is responsive and compatible with
                        different devices and browsers. They collaborate with
                        UI/UX designers to bring their designs to life and
                        create a seamless user experience.
                    </li>
                    <li>
                        Back-end developers concentrate on the server-side of
                        web development, dealing with the behind-the-scenes
                        logic and data management. They work with server-side
                        programming languages like Python, Ruby, Java, or
                        Node.js, depending on the technology stack being used.
                        They are responsible for handling data storage,
                        retrieval, and manipulation, often using databases like
                        MySQL, PostgreSQL, or MongoDB. They also ensure that the
                        server and database operations are efficient, secure,
                        and scalable to handle user requests and data
                        management.
                    </li>
                    <li>
                        In summary, front-end developers focus on creating the
                        visual and interactive aspects of a website or web
                        application that users see and interact with directly,
                        while back-end developers deal with the server-side and
                        data management aspects, making sure the application
                        runs smoothly and handles data effectively. Both
                        front-end and back-end developers work together to
                        create a fully functional and user-friendly web
                        application.
                    </li>
                </ul>
            </Essay>

            <Essay question="Q5: What is the difference between Absolute, Root and Document Relative linking?">
                <ul>
                    <li>
                        Absolute linking involves specifying the complete URL,
                        including the protocol (http:// or https://), domain
                        name, and the entire file path to the resource. This
                        type of linking provides the full path from the web
                        server's root directory to the resource. Absolute links
                        are not dependent on the current location of the HTML
                        document and are used to point to resources hosted on
                        different domains or servers.
                    </li>
                    <ul>
                        <li>
                            Imagine you're giving someone your full home
                            address, including the street name, city, and
                            country. This helps them find your house from
                            anywhere because they have all the details they
                            need.
                        </li>
                    </ul>
                    <li>
                        Root-relative linking specifies the path to a resource
                        starting from the web server's root directory. It begins
                        with a leading slash ('/') followed by the path to the
                        resource. This type of linking is useful when you want
                        to specify a path relative to the root of the website,
                        regardless of the location of the HTML document within
                        the website's directory structure. Root-relative links
                        are useful for maintaining consistency when moving files
                        around within a website's directory structure.
                    </li>
                    <ul>
                        <li>
                            Think of this like giving directions starting from
                            the main road outside your neighborhood. You only
                            need to mention the turns and landmarks from that
                            main road to reach your house, no matter where the
                            person is starting from.
                        </li>
                    </ul>
                    <li>
                        Document-relative linking specifies the path to a
                        resource relative to the location of the current HTML
                        document. This type of linking is based on the directory
                        structure of the website and is commonly used when the
                        resource is located in the same directory as the HTML
                        file or in a subdirectory. Document-relative links are
                        often used for resources that are closely associated
                        with a specific page.
                    </li>
                    <ul>
                        <li>
                            Picture telling someone how to find your bedroom
                            from the living room in your house. You don't need
                            to mention the whole house's layout, just the
                            directions from where they are right now.
                        </li>
                    </ul>
                </ul>
            </Essay>

            <Essay question="Q6: What is the difference between jpg, gif, png and svg images?">
                <ul>
                    <li>
                        JPG (or JPEG) stands for Joint Photographic Experts
                        Group. Think of JPG images like photographs. They're
                        really good at showing pictures with lots of colors and
                        details. If you take a picture with your phone, it's
                        probably saved as a JPG. These images can be smaller in
                        size, which makes them great for the internet, but they
                        might lose a tiny bit of quality each time you save
                        them.
                    </li>
                    <li>
                        GIF stands for Graphics Interchange Format. A type of
                        image format that supports animated images, typically of
                        short duration and limited resolution. Imagine GIFs like
                        short, looping animations. They're often used for funny
                        or expressive pictures that repeat over and over. Think
                        of them as digital stickers or mini-movies. However,
                        GIFs usually don't have as many colors as JPGs, so they
                        might not look as clear for detailed photos.
                    </li>
                    <li>
                        PNG: stands for Portable Network Graphics. PNG images
                        are like a mix between JPG and GIF. They can show a lot
                        of colors and details, just like JPGs, but they also
                        have a special feature: they can have a transparent
                        background. This makes them perfect for things like
                        logos or images that need to sit on top of other content
                        without having a square or rectangular background.
                    </li>
                    <li>
                        SVG stands for Scalable Vector Graphics. SVGs are like
                        magic drawings that can resize themselves without losing
                        quality, no matter how big or small you make them.
                        They're often used for logos, icons, and things that
                        need to look good on different devices.
                    </li>
                </ul>
            </Essay>

            <Essay question="Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.">
                <ul>
                    <li>
                        A product owner defines and prioritizes the product
                        backlog, ensuring that the development team works on the
                        most valuable features first.
                    </li>
                    <li>
                        A product manager shapes the product vision and
                        strategy, aligning it with business goals and market
                        needs.
                    </li>
                    <li>
                        A business analyst gathers and communicates requirements
                        between stakeholders and the development team.
                    </li>
                    <li>
                        A scrum master facilitates Agile ceremonies and helps
                        the team follow the Scrum framework effectively.
                    </li>
                    <li>
                        A UX designer creates user-friendly and intuitive
                        interfaces to enhance the overall user experience.
                    </li>
                    <li>
                        A developer/engineer writes code and builds features
                        according to the requirements provided.
                    </li>
                    <li>
                        QA/SDET ensures software quality through testing and
                        automation, identifying and preventing defects.
                    </li>
                    <li>
                        DevOps automate deployment and streamline
                        development-to-production workflows for efficient and
                        reliable software delivery.
                    </li>
                </ul>
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
