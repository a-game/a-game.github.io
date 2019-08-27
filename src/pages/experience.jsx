import React from "react";
import { Layout, SEO, ListLink, Link } from "../components";
import { MdMultilineChart, MdCode, MdSchool } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import style from "./experience.module.scss";

const XpPage = () => {
  return (
    <Layout>
      <SEO title="Experience" description="My Experience and resumé" />
      <article className="content">
        <section>
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
                <h4>Founder - Gamesome</h4>
                <p>
                  Gamesome is a software company that I'm hoping will start out
                  as a consultant company and then grow into product
                  development. But time will tell.
                </p>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.linePart}>
                <div className={style.date}>2015</div>
                <div className={style.line}></div>
              </div>
              <div className={style.textPart}>
                <h4>Product manager - Lime Technologies</h4>
                <p>
                  After working as developer for four years, I got offered a
                  position as a product manager at Lime. That sounded like fun
                  and I wanted to try it out. One big advantage to going from
                  development to product is that it gave me a huge advantage
                  when communicating with developers and consultants who deliver
                  our products. It was also great when talking to technical
                  customers, partners using our API:s and our tech support.
                  However, It wasn't all good. One of the big challenges for me,
                  was focusing on the "problem space" and not the "solution
                  space", that is something that I have to actively think about.
                </p>
                <p>
                  During my time as a PM I worked with Lime products targeting
                  sales and marketing market segments. This thought me quite a
                  lot about those domains.
                </p>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.linePart}>
                <div className={style.date}>2011</div>
                <div className={style.line}></div>
              </div>
              <div className={style.textPart}>
                <h4>Software developer - Lime Technologies</h4>
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
                  products. I later took lead on gracefully moving users from
                  their oldest legacy product, Lime Easy, to the other two; Lime
                  Go which is a Sales focused CRM system for smaller companies
                  and Lime CRM which is Limes flagship platform.
                </p>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.linePart}>
                <div className={style.date}>2008</div>
                <div className={style.line}></div>
              </div>
              <div className={style.textPart}>
                <h4>BS in Software development - Lund University</h4>
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
                <h4>Programming Tutor - Lund University</h4>
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
                <h4>Study - Lund University</h4>
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
          <h2 className="text-center">Experience</h2>
          <div className={style.project}>
            <h3>Lime CRM add-ons</h3>
            <ul className={style.tags}>
              <ListLink to="https://www.python.org/">Python</ListLink>
              <ListLink to="https://developer.mozilla.org/en-US/docs/Web/Web_Components">
                Web Components
              </ListLink>
              <ListLink to="https://reactjs.org/">React</ListLink>
              <ListLink to="https://stenciljs.com">stencil.js</ListLink>
              <ListLink to="https://www.ecma-international.org/ecma-262/9.0/">
                ES 2018
              </ListLink>
            </ul>
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
              customizable. You can specify your own personal schema and object
              names, which will then be available in the API, and so on. You
              could even write your own custom API endpoint with your own
              business logic and extend the web client using Web Components to
              visualize and interact with the data in your own way.
            </p>
            <p>
              Although this was not my main job at the time, I learned a lot by
              testing and building small add-ons (which is a packaged
              combination of the aforementioned customizations). Imagine
              building a React app with the dev team in the room next door{" "}
              <span role="img" aria-label="smile">
                😎
              </span>
            </p>
          </div>
          <div className={style.project}>
            <h3>Product Management</h3>
            <ul className={style.tags}>
              <ListLink to="https://ads.google.com">Google Ads</ListLink>
              <ListLink to="https://metabase.com/">Metabase</ListLink>
              <ListLink to="https://segment.com/">Segment</ListLink>
            </ul>
            <p>
              As a product manager I was responsible for the whole user journey.
              That often starts with a web search for some solution to their
              current problem.
            </p>
            <p>
              Im my role I worked with the marketing department to to try to
              attract as many web searches as possible to our product websites.
              I worked with sales people to maximize conversion. I worked with
              the development team to make sure the users got value for their
              money. And I worked with support staff to make sure the users
              stayed happy. All the while listening to feedback to tweak the
              whole process.
            </p>
          </div>
          <div className={style.project}>
            <h3>Lime Go</h3>
            <ul className={style.tags}>
              <ListLink to="https://dotnet.microsoft.com/apps/aspnet">
                ASP.NET
              </ListLink>
              <ListLink to="https://github.com/dotnet/core">.NET Core</ListLink>
              <ListLink to="https://www.elastic.co/products/elasticsearch">
                Elastic Search
              </ListLink>
              <ListLink to="https://aws.amazon.com/">AWS</ListLink>
              <ListLink to="https://graphql.org/">GraphQL</ListLink>
              <ListLink to="https://www.ecma-international.org/ecma-262/6.0/">
                ES6
              </ListLink>
              <ListLink to="https://www.docker.com/">Docker</ListLink>
            </ul>
            <p>
              Go was my first real experience with web development and working
              with SaaS. Go is a SPA built on modern web infrastructure with
              micro services running in docker containers, an ASP.NET server,
              and a ES6 client.
            </p>
            <p>
              The crux with this product was that it had a hefty amount of data,
              that was to be made searchable and available to the user. Both
              using the web client and the API for integrations. Storing
              commonly used information in a quick search engine and lazy
              loading more data on demand, in combination with a graphQL API
              where you have to explicitly ask for the information you want is
              great for this purpose.
            </p>
          </div>
          <div className={style.project}>
            <h3>Lime Easy</h3>
            <ul className={style.tags}>
              <ListLink to="https://docs.microsoft.com/en-us/windows/win32/com/">
                COM
              </ListLink>
              <ListLink to="https://docs.microsoft.com/en-us/windows/win32/">
                Win32
              </ListLink>
              <ListLink to="https://dotnet.microsoft.com">.NET</ListLink>
            </ul>
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
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default XpPage;
