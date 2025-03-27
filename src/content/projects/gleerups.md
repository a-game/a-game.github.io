---
title: Gleerups LLM POC
description: A proof of concept for testing and evaluating the use of large language models in educational applications.
featured: 5
image: images/gleerups.png
tech:
  - Python
  - AWS Bedrock
  - Next.js
  - Github Actions
  - Docker
---

With the rise LLMs popularity and utility, Gleerups wanted to explore how they can be used to enhance their learning platform. Ideas for using LLMs ranged from summarising and explaining articles, helping teachers generate quizzes to tutoring students and customizing the material based on their performance.

In order to test various ideas, Gleerups wanted to have a sandbox environment where they could perform experiments without impacting their production environment.

Another key consideration they have is the safety and reliability of the generated material, specially considering that most of their users are children and young adults.

#### The project had two main goals

1. Evaluate the safety and reliability of using LLMs to perform different tasks like summarization, explanation and quiz generation.

2. Provide a sandbox environment for experimentation with new ideas and use cases for LLMs.

---

Evaluation of LLMs is highly dependant on the task to be performed. When evaluating summarization for example, metrics like semantic overlap (BERT-Score) and making sure the summary captures the key points of a given article are important, where generated quizzes must be constrained to the information available in an article regardless of the fact that the LLM knows more facts about the subject.

To perform evaluations, we developed a python cli where the user specifies the model and the task they want to evaluate, and it will go off and run a series of tests producing scores for each relevant metric to the specified task.

Finally it will give a combined overall score that can be used to compare the performance of different models. Our second goal was to provide a sandbox environment to quickly iterate and test out new applications of LLMs, and for that we build a small web interface where the team can easily add new self contained apps or widgets and configure a model to perform a task. This ties in nicely with the aforementioned evaluation framework to produce empirical data and evidence of the feasibility and reliability of a new feature
