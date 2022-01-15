import React, { useEffect } from "react";
import ExternLink from "./gitLink";
import MazzieCafe from "./mazzieCafeLink";
import "./ProjectsStyle.css";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrap,
  Img,
  LinkWrap,
} from "./ProjectElements";

import Aos from "aos";
import "aos/dist/aos.css";

const ProjectsSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description1,
  description2,
  img,
  alt,
}) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <div data-aos="fade-left">
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headLine}</Heading>
                  <SubTitle darkText={darkText}>{description1}</SubTitle>
                  <SubTitle darkText={darkText}>{description2}</SubTitle>
                  <ul class="list-group">
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="From the Iowa State Catalog: CPRE281 - Number systems and representation. Boolean algebra and logic minimization. Combinational and sequential logic design. Arithmetic circuits and finite state machines. Use of programmable logic devices. Introduction to computer-aided schematic capture systems, simulation tools, and hardware description languages. Design of simple digital systems.."
                    >
                      Digital Logic
                      <span class="badge bg-primary rounded-pill">A-</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="From the Iowa State Catalog: SE185 - Introduction to software engineering and computer programming. Systematic thinking process for problem solving in the context of software engineering. Group problem solving. Solving software engineering problems and presenting solutions through computer programs, written documents and oral presentations. Introduction to principles of programming, software design, and extensive practice in design, writing, running, debugging, and reasoning about programs."
                    >
                      Problem Solving in Software Engineering
                      <span class="badge bg-primary rounded-pill">A</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="From the Iowa State Catalog: COMS227 - Computer programming using objects as the mechanism for modularity, abstraction, and code reuse. Instance variables, methods, and encapsulation. Review of control structures for conditionals and iteration. Developing algorithms on strings, arrays, and lists. Recursion, searching, and sorting. Text parsing and file I/O. Interfaces, inheritance, polymorphism, and abstract classes. Exception handling. Tools for unit testing and debugging. Emphasis on a disciplined approach to specification, code development, and testing."
                    >
                      Object-Oriented Programming
                      <span class="badge bg-primary rounded-pill">C+</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="From the Iowa State Catalog: COMS228 - An object-oriented approach to data structures and algorithms. Object-oriented analysis, design, and programming, with emphasis on data abstraction, inheritance and subtype polymorphism, and generics. Abstract data type specification and correctness. Collections including lists, stacks, queues, trees, heaps, maps, hash tables, and graphs. Big-O notation and algorithm analysis. Searching and sorting. Graph search and shortest path algorithms. Emphasis on object-oriented design, writing and documenting medium-sized programs. This course is designed for majors."
                    >
                      Data Structures and Algorithms
                      <span class="badge bg-primary rounded-pill">B</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="From the Iowa State Catalog: CPRE288 - Embedded C programming. Interrupt handling. Memory mapped I/O in the context of an application. Elementary embedded design flow/methodology. Timers, scheduling, resource allocation, optimization, state machine based controllers, real time constraints within the context of an application. Applications laboratory exercises with embedded devices."
                    >
                      Embedded Systems 1
                      <span class="badge bg-primary rounded-pill">A</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="From the Iowa State Catalog: COMS342 - Study of concepts in programming languages, especially functional programming concepts. Overview of major programming paradigms, their relationship, and tradeoffs among paradigms enabling sound choices of programming language for application-specific development. Programming projects."
                    >
                      Principles of Programming Languages
                      <span class="badge bg-primary rounded-pill">B</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="From the Iowa State Catalog: COMS309 - A practical introduction to methods for managing software development. Process models, requirements analysis, structured and object-oriented design, coding, testing, maintenance, cost and schedule estimation, metrics. Programming projects."
                    >
                      Software Development Practices
                      <span class="badge bg-primary rounded-pill">B+</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="From the Iowa State Catalog: COMS319 - Overview of user interface design. Evaluation and testing of user interfaces. Review of principles of object orientation, object oriented design and analysis using UML in the context of user interface design. Design of windows, menus and commands. Developing Web and Windows-based user-interfaces. Event-driven programming. Introduction to Frameworks and APIs for the construction of user interfaces."
                    >
                      Construction of User Interfaces
                      <span class="badge bg-primary rounded-pill">A</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="From the Iowa State Catalog: COMS321 - Introduction to computer architecture and organization. Emphasis on evaluation of performance, instruction set architecture, datapath and control, memory-hierarchy design, and pipelining. Assembly language programming."
                    >
                      Introduction to Computer Architecture and Machine-Level
                      Programming
                      <span class="badge bg-primary rounded-pill">B-</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="From the Iowa State Catalog: COMS363 - Relational, object-oriented, semistructured and query languages. SQL, XML, and NO-SQL. Database design using entity-relationship model, data dependencies, and relational database design. Application development in SQL-like languages and general purpose host languages with application program interfaces and a commonly used Object Relational Mapping framework. Web application development. Programming Projects."
                    >
                      Database Management Systems
                      <span class="badge bg-primary rounded-pill">C</span>
                    </li>
                  </ul>
                  <LinkWrap>
                    <ExternLink />
                    <p style={{ color: "black", marginTop: "20px" }}>
                      My newest personal project is linked below (December
                      2021). It's a React app called Mazzie's Cafe. I used this
                      project to help me learn about the useState, useEffect,
                      useContext and useReducer React hooks.
                    </p>
                    <MazzieCafe />
                  </LinkWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </div>
      </InfoContainer>
    </>
  );
};

export default ProjectsSection;
