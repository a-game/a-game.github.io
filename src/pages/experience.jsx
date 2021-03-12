import React from "react";
import { Layout, SEO, Link, TagList } from "../components";
import { MdMultilineChart, MdCode, MdSchool } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import * as style from "./experience.module.scss";
import Logo from "../images/G-logo-round.svg";

const XpPage = () => {
  return (
    <Layout>
      <SEO title="Experience" description="My Experience and resumé" />
      <article>
        <div className={style.showOnlyOnPrint}>
          <img src={Logo} alt="Game Logo" />
          <div className={style.contactInfo}>
            <span>Ahmad Game</span>
            <span> ahmad@gamesome.io</span>
            <span>+46 735 577 155</span>
          </div>
        </div>

        <section className={style.uspSection}>
          <h2 className="text-center">What I do</h2>
          <div className="row">
            <div className="column">
              <div className="column-header">
                <MdCode className="color-secondary" />
                <h4>Developer</h4>
              </div>
              <p className="column-text">
                I am first and foremost a developer. For me, software
                development is about solving problems in a creative way, which
                is awesome!
              </p>
              <p className="column-text">
                It's like playing with lego, without the risk of stepping on
                one.
              </p>
            </div>
            <div className="column">
              <div className="column-header">
                <MdMultilineChart className="color-secondary" />
                <h4>Product Manager</h4>
              </div>
              <p className="column-text">
                The user perspective and the business side of software
                development is something that I find interesting.
              </p>
              <p className="column-text">
                We shouldn't forget that the end goal of all software is to
                solve human problems.
              </p>
            </div>
            <div className="column">
              <div className="column-header">
                <MdSchool className="color-secondary" />
                <h4>Teacher</h4>
              </div>
              <p className="column-text">
                I've been often described as a good teacher. Which is quite
                useful when trying to explain software and getting different
                people to work together.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-center">Career summary</h2>
          <div className={style.timeline}>
            <div className={style.row}>
              <div className={style.linePart}>
                <div className={style.date}>2019</div>
                <div className={style.line}></div>
              </div>
              <div className={style.textPart}>
                <h4>Co-Founder &nbsp;&mdash;&nbsp; Gamesome</h4>
                <p>
                  Gamesome is a software consultant company with a long term
                  goal to grow into developing our own products.
                </p>
                <p>
                  At Gamesome I use my experience of building products to help
                  other companies to realize their product ideas or to develop
                  existing products in order to solve user pains. When I’m not
                  helping customers I work on our own product ideas or just
                  create some small project in order to learn and develop new
                  skills.
                </p>
                <p className={style.hideOnPrint}>
                  <Link to="https://gamesome.io">Learn more...</Link>
                </p>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.linePart}>
                <div className={style.date}>2015</div>
                <div className={style.line}></div>
              </div>
              <div className={style.textPart}>
                <h4>Product manager &nbsp;&mdash;&nbsp; Lime Technologies</h4>
                <p>
                  After working as developer for four years, I got a position as
                  a product manager at Lime. That sounded like fun and I wanted
                  to try it out. One big advantage to going from development to
                  product is that it gave me a huge advantage when communicating
                  with developers and consultants who deliver our products. It
                  was also great when talking to technical customers, partners
                  using our API:s and our tech support. However, It wasn't all
                  good. One of the big challenges for me, was focusing on the
                  "problem space" and not the "solution space", that is
                  something that I have to actively think about.
                </p>
                <p>
                  As a PM I was responsible for the whole user journey. I worked
                  with marketing in order to attract new customers through ads
                  and relevant content. I worked with sales to maximize hit rate
                  and conversion. I built product roadmaps and prioritized tasks
                  together with the dev team. Finally I made sure that the users
                  stayed happy together with customer success and a great
                  support team.
                </p>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.linePart}>
                <div className={style.date}>2011</div>
                <div className={style.line}></div>
              </div>
              <div className={style.textPart}>
                <h4>
                  Software developer &nbsp;&mdash;&nbsp; Lime Technologies
                </h4>
                <p>
                  Lime is the swedish market leader on CRM. They develop, sell,
                  deliver and support their CRM products. This is quite great if
                  you are a developer, because you are always close to the
                  actual user. You direct input from users when developing new
                  features, and quick feedback when something breaks.
                </p>
                <p>
                  I joined Lime when the development department was still quite
                  small so I got a chance to work on all of their three CRM
                  products though me to be versatile and to treat languages and
                  code stacks as means to the end of solving user problems. I
                  never really stopped being a developer during my time at Lime.
                  Even tough my job title had changed, I always seamed to
                  stumble upon occasions where programming was helpful if not
                  necessary.
                </p>
                <p>
                  As the company grew and I gained more experience, I started
                  taking on different formal and informal engineering roles. To
                  state a few examples: I worked as tech lead responsible for
                  technical decisions. I had a brief period as team lead and
                  manager. I filled the role of technical advisor during
                  technical due diligence in the process of company
                  acquisitions. Lastly I had the role of an architect designing
                  how different pieces of software should work together.
                </p>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.linePart}>
                <div className={style.date}>2008</div>
                <div className={style.line}></div>
              </div>
              <div className={style.textPart}>
                <h4>
                  BS in Software development &nbsp;&mdash;&nbsp; Lund University
                </h4>
                <p>
                  After starting a few programs, I finally finished a degree in
                  software development. What's cool about This specific program,
                  is that it was
                </p>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.linePart}>
                <div className={style.date}>2010</div>
                <div className={style.line}></div>
              </div>
              <div className={style.textPart}>
                <h4>Programming Tutor &nbsp;&mdash;&nbsp; Lund University</h4>
                <p>
                  During my studies, I worked for Lund university as a tutor,
                  helping other students with programming classes. This was fun
                  and useful because in order to hold a lecture about
                  programming, I had to read up and really try to understand the
                  concepts we were taught.
                </p>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.linePart}>
                <div className={style.date}>2005</div>
                <div className={style.line}></div>
              </div>
              <div className={style.textPart}>
                <h4>Study &nbsp;&mdash;&nbsp; Lund University</h4>
                <p>
                  At this point of my life, I couldn't really decide on what I
                  wanted to do. To solve that problem I just enrolled to as many
                  courses as I could. I started an degree in engineering and
                  another in finance, but I didn't finish any of them. I did
                  however learn about physics, mathematics and accounting.
                </p>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.linePart}>
                <div className={style.date}>
                  <FaBaby />
                </div>
              </div>
              <div className={style.textPart}></div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-center">Projects I've worked on</h2>
          <div className={style.project}>
            <h3>Bathroom Finder</h3>
            <TagList
              tags={[
                { label: "Flutter", url: "https://flutter.dev/" },
                { label: "Dart", url: "https://dart.dev/" },
              ]}
            />
            <p>
              When my daugther was born, I found my self going on a lot of long
              walks in the rainy Swedish winter, and before i knew it I had to
              change a diaper. But where can I do that?
            </p>
            <p>
              I was faced with a problem that I didn't know I had. Being a
              developer, my first thought was is there an app for that? The
              answer was both yes and no. There were plenty of apps showing
              where public bathrooms are, but none of them provided information
              about the availability of a diaper changing table.
            </p>
            <p>So I built an app to solve that exact problem.</p>
            <p>
              Bathroom Finder is completely free and available for{" "}
              <Link to="https://apps.apple.com/us/app/id1518954012">iOS</Link>{" "}
              and{" "}
              <Link to="https://play.google.com/store/apps/details?id=io.gamesome.bathroom_finder">
                Android
              </Link>
              . Building this app solved a real life problem that I had and
              provided a learning experience of developing and releasing a cross
              platform app built with flutter.
            </p>
          </div>
          <div className={style.project}>
            <h3>E-Space Survey Manager</h3>
            <TagList
              tags={[
                { label: "React", url: "https://reactjs.org/" },
                { label: "GraphQL", url: "https://graphql.org/" },
                { label: "Node.js", url: "https://nodejs.org/en/" },
                { label: "Apollo", url: "https://www.apollographql.com/" },
                { label: "Prisma", url: "https://www.prisma.io/" },
                { label: "Docker", url: "https://www.docker.com/" },
              ]}
            />
            <p>
              E-Space is a company that offers online surveys for their
              customers to engage with users in order to improve their websites,
              products and services. E-Space helps their customers to design
              engaging surveys, analyze the responses, present aggregated
              results and suggest improvements. They use a proprietary tool
              called “Survey Manager” to publish surveys, collect and analyse
              responses.
            </p>
            <p>
              In order to scale their business they wanted to make the Survey
              Manager available for customers to publish their own surveys and
              get an overview of the response data. Additionally they wanted to
              help their customers make sense of the data and find insights into
              their users behaviours. E-Space then relied on their own expertise
              to provide deeper analysis and suggest improvements.
            </p>
            <p>
              This presented a couple of interesting challenges, where I had to
              use my entire toolkit from development, through UX design and
              product management.
            </p>
            <p>
              Firstly, the Survey Manager had to be visually and functionally
              redesigned to cater to both the expert analysts at E-Space, and
              newer less experienced users.
            </p>
            <p>
              Secondly, we needed to automate and simplify some workflows
              performed by the analysts that the new users expected to be able
              to do themselves.
            </p>
            <p>
              Finally, we had to rework pricing and marketing strategies where
              license fees and expert services should complement each other to
              provide a good customer experience.
            </p>
          </div>
          <div className={style.project}>
            <h3>Lime CRM add-ons</h3>
            <TagList
              tags={[
                { label: "Python", url: "https://www.python.org/" },
                {
                  label: "Web Components",
                  url:
                    "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
                },
                { label: "React", url: "https://reactjs.org/" },
                { label: "stencil.js", url: "https://stenciljs.com" },
                {
                  label: "ES 2018",
                  url: "https://www.ecma-international.org/ecma-262/9.0/",
                },
              ]}
            />
            <h4>Development</h4>
            <p>
              Lime CRM is an interesting product, with a really bad name. It's
              not really a CRM at all. It's more like a platform for building
              data manipulation tools.
            </p>
            <p>
              Out of the box, what you get is a relational database, a web API
              that can serve the data, a client that can visualize the data and
              some micro services that can do other things with the data. For
              example there is a search engine that can make the data searchable
              and message queue that can tell you when the data has changed.
            </p>
            <p>
              The cool thing is that all of this stuff is extendable and
              customizable. You can specify your own schema and object models,
              which will then be available everywhere. You could extend the API
              with your own custom endpoints containing your custom business
              logic. You could event customize user interaction by building
              custom Web Components that visualize and interact with the data in
              your own way.
            </p>
            <p>
              Because of my experience in development, I was an early tester of
              these customization tools. The result was a couple of MVPS and one
              shippable add-on (a packaged combination of the aforementioned
              customizations). I learned a lot by being involved at such an
              early stage. Imagine building a React app with the React core team
              in the room next door.{" "}
              <span role="img" aria-label="smile">
                😎
              </span>
            </p>
            <h4>Product Management</h4>
            <p>
              In October of 2018, Lime acquired a company called Netoptions, who
              built tools for digital marketing. I was involved in this project
              from the very beginning, helping out with the technical due
              diligence and later managing the integration of these marketing
              tools to Limes existing CRM systems.
            </p>
            <p>
              Netoptions marketing tools were repackaged into add-ons, but due
              to their complexity they warranted their own development team and
              product management. The process of integrating the products was a
              great learning experience, and it was extra fun to learn about a
              new domain.
            </p>
          </div>
          <div className={style.project}>
            <h3>Lime Go</h3>
            <TagList
              tags={[
                {
                  label: "ASP.NET",
                  url: "https://dotnet.microsoft.com/apps/aspnet",
                },
                { label: ".NET Core", url: "https://github.com/dotnet/core" },
                {
                  label: "Elastic Search",
                  url: "https://www.elastic.co/products/elasticsearch",
                },
                { label: "AWS", url: "https://aws.amazon.com/" },
                { label: "GraphQL", url: "https://graphql.org/" },
                {
                  label: "ES6",
                  url: "https://www.ecma-international.org/ecma-262/6.0/",
                },
                { label: "Docker", url: "https://www.docker.com/" },
              ]}
            />
            <h4>Development</h4>
            <p>
              Go was my first real experience with web development and working
              with SaaS. Go is a SPA built on modern web infrastructure with
              micro services running in docker containers, an ASP.NET server,
              and a ES6 client.
            </p>
            <p>
              Lime Go is sold with all of the nordic business contacts already
              included in the product. This presented some cool challenges as we
              had to think about separating the information already present in
              the system from the data entered by the user to protect their
              privacy. But at the same time merge the two data sets and make
              them available for the user.
            </p>
            <h4>Product Management</h4>
            <p>
              I started managing Lime Go when the product was just coming out of
              the introduction phase of it's life cycle and going in to the
              growth phase. My primary focus was to maximize user acquisition
              and minimize churn in order for the product to become self
              sustaining and profitable.
            </p>
            <p>
              The product and the brand had gotten some traction during the
              introduction phase so my work was directed at product positioning
              and make sure we had a product that delivers value to our
              customers and stands out in a heavily competitive market.
            </p>
          </div>
          <div className={style.project}>
            <h3>Lime Easy</h3>
            <TagList
              tags={[
                {
                  label: "COM",
                  url: "https://docs.microsoft.com/en-us/windows/win32/com/",
                },
                {
                  label: "Win32",
                  url: "https://docs.microsoft.com/en-us/windows/win32/",
                },
                { label: ".NET", url: "https://dotnet.microsoft.com" },
              ]}
            />
            <h4>Development</h4>
            <p>
              Easy is the first "real life" software product I've worked on so
              maybe it's not so surprising that it taught me the most.
            </p>
            <p>
              When I started working with Lime Easy, the objective was to take a
              very popular product and modernize it. Both in terms of tech stack
              and in terms of visual design. Later the objective shifted towards
              just maintaining the product and move users to Limes other
              products.
            </p>
            <p>
              Lime Easy is a Win32 program written in C++ by a tight group of
              developers over 20 years. Oh, and with no tests to speak of. It's
              safe to say it had quite a few pitfalls and caveats. It was not
              trivial to add or alter functionality without breaking something
              else. The book{" "}
              <Link to="http://ptgmedia.pearsoncmg.com/images/9780131177055/samplepages/0131177052.pdf">
                "Working Effectively With Legacy Code" by Michael C. Feathers{" "}
              </Link>
              was of great help when trying to figure this out.
            </p>
            <p>
              Some people may cringe at the thought of working with Win32 and
              COM, but I'm very glad I did. Concepts like the Windows message
              loop are borrowed and reused in modern frameworks like Redux. COM
              was one of the earliest attempts at cross platform,
              language-neutral communication between software programs. At it's
              essence it's quite an elegant way to have a self documenting API.
            </p>
            <h4>Product management</h4>
            <p>
              Contrary to Lime Go, I started managing Lime Easy at the end of
              it's product life cycle. My key objectives were to keep users
              happy enough to minimize churn while maximizing "positive churn"
              by migrating customers to Limes other products.
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default XpPage;
