"use client"

import { ExternalLink, Calendar, Tag } from "lucide-react"
import { useTheme, colors } from "@/contexts/theme-context"
import html2pdf from "html2pdf.js"
import { marked } from "marked"

const blogPosts = [
  {
    title: "How I Automated Deployments Using GitHub Actions",
    description: "A comprehensive guide to setting up CI/CD pipelines with GitHub Actions for seamless deployments.",
    category: "CI/CD",
    date: "Dec 2024",
    readTime: "5 min read",
    url: "#",
    fullContent: `
      # How I Automated Deployments Using GitHub Actions

      ## Introduction
      In today's fast-paced development environment, automating deployments is crucial for efficiency and reliability. GitHub Actions provides a powerful, flexible platform for building CI/CD pipelines directly within your GitHub repository. This post will walk you through setting up a basic CI/CD pipeline to automate your deployments.

      ## Why GitHub Actions?
      *   **Integrated:** Native to GitHub, no external tools needed.
      *   **Flexible:** Supports various languages, environments, and deployment targets.
      *   **Community:** Large marketplace of pre-built actions.

      ## Step-by-Step Guide

      ### 1. Project Setup
      Ensure your project is in a GitHub repository. For this example, let's assume a simple web application.

      ### 2. Create Workflow File
      In your repository, create a \`.github/workflows\` directory, and inside it, a \`.yml\` file (e.g., \`deploy.yml\`).

      \`\`\`yaml
      name: CI/CD Pipeline

      on:
        push:
          branches:
            - main

      jobs:
        build-and-deploy:
          runs-on: ubuntu-latest
          steps:
            - name: Checkout code
              uses: actions/checkout@v3

            - name: Set up Node.js
              uses: actions/setup-node@v3
              with:
                node-version: '18'

            - name: Install dependencies
              run: npm install

            - name: Build project
              run: npm run build

            - name: Deploy to production
              run: echo "Deploying to production..."
              # Replace with actual deployment steps (e.g., AWS S3 sync, Docker push, SSH)
      \`\`\`

      ### 3. Customize Deployment Steps
      The \`Deploy to production\` step is a placeholder. You would replace \`echo "Deploying to production..."\` with your actual deployment logic. This could involve:
      *   Pushing Docker images to a registry.
      *   Deploying to AWS S3, EC2, Lambda, or EKS.
      *   SSHing into a server and running deployment scripts.

      ## Conclusion
      GitHub Actions simplifies the automation of your software delivery lifecycle. By defining your workflows in YAML, you gain version-controlled, repeatable, and efficient deployments. Start automating today!
    `,
  },
  {
    title: "Dockerizing Python Apps for Beginners",
    description: "Step-by-step tutorial on containerizing Python applications with Docker best practices.",
    category: "Docker",
    date: "Nov 2024",
    readTime: "7 min read",
    url: "#",
    fullContent: `
      # Dockerizing Python Apps for Beginners

      ## Introduction
      Docker has revolutionized how we build, ship, and run applications. For Python developers, containerizing applications ensures consistency across different environments and simplifies deployment. This guide will walk you through the basics of Dockerizing a Python application.

      ## Prerequisites
      *   Docker Desktop installed
      *   Basic understanding of Python

      ## Step-by-Step Guide

      ### 1. Create a Simple Python App
      Let's create a \`app.py\` file:

      \`\`\`python
      # app.py
      from flask import Flask
      app = Flask(__name__)

      @app.route('/')
      def hello():
          return "Hello from Dockerized Python App!"

      if __name__ == '__main__':
          app.run(host='0.0.0.0', port=5000)
      \`\`\`

      And a \`requirements.txt\` file:

      \`\`\`
      Flask==2.0.1
      \`\`\`

      ### 2. Create a Dockerfile
      A Dockerfile contains instructions for building a Docker image.

      \`\`\`dockerfile
      # Dockerfile
      # Use an official Python runtime as a parent image
      FROM python:3.9-slim-buster

      # Set the working directory in the container
      WORKDIR /app

      # Copy the current directory contents into the container at /app
      COPY requirements.txt .
      COPY app.py .

      # Install any needed packages specified in requirements.txt
      RUN pip install --no-cache-dir -r requirements.txt

      # Make port 5000 available to the world outside this container
      EXPOSE 5000

      # Run app.py when the container launches
      CMD ["python", "app.py"]
      \`\`\`

      ### 3. Build the Docker Image
      Navigate to your project directory in the terminal and run:

      \`\`\`bash
      docker build -t python-docker-app .
      \`\`\`

      ### 4. Run the Docker Container
      Once the image is built, run it:

      \`\`\`bash
      docker run -p 5000:5000 python-docker-app
      \`\`\`

      Now, open your browser and go to \`http://localhost:5000\`. You should see "Hello from Dockerized Python App!".

      ## Conclusion
      Dockerizing your Python applications provides a consistent and isolated environment, making development and deployment much smoother. This basic setup can be extended with multi-stage builds, Docker Compose, and more for complex applications.
    `,
  },
  {
    title: "Setting Up CI/CD with Jenkins",
    description: "Complete guide to implementing continuous integration and deployment using Jenkins.",
    category: "Jenkins",
    date: "Oct 2024",
    readTime: "8 min read",
    url: "#",
    fullContent: `
      # Setting Up CI/CD with Jenkins

      ## Introduction
      Jenkins is an open-source automation server that helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery. This guide will walk you through setting up a basic CI/CD pipeline using Jenkins.

      ## Prerequisites
      *   A server (VM, cloud instance) with Java installed
      *   Docker (optional, for running Jenkins in a container)

      ## Installation (using Docker)
      The easiest way to get Jenkins running is via Docker:

      \`\`\`bash
      docker run -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts-jdk11
      \`\`\`

      Access Jenkins at \`http://localhost:8080\` and follow the initial setup instructions.

      ## Creating a Jenkins Pipeline

      ### 1. Install Plugins
      Go to "Manage Jenkins" > "Manage Plugins" and install necessary plugins like "Pipeline", "Git", etc.

      ### 2. Create a New Item
      From the Jenkins dashboard, click "New Item", give it a name (e.g., \`my-cicd-pipeline\`), select "Pipeline", and click OK.

      ### 3. Configure the Pipeline
      In the pipeline configuration, select "Pipeline script from SCM" and configure your Git repository.

      ### 4. Define Jenkinsfile
      Create a \`Jenkinsfile\` in the root of your Git repository:

      \`\`\`groovy
      // Jenkinsfile
      pipeline {
          agent any

          stages {
              stage('Build') {
                  steps {
                      echo 'Building the application...'
                      // Add your build commands here (e.g., npm install, npm build, mvn clean install)
                  }
              }
              stage('Test') {
                  steps {
                      echo 'Running tests...'
                      // Add your test commands here (e.g., npm test, pytest)
                  }
              }
              stage('Deploy') {
                  steps {
                      echo 'Deploying the application...'
                      // Add your deployment commands here (e.g., docker push, ssh commands)
                  }
              }
          }
      }
      \`\`\`

      ### 5. Run the Pipeline
      Commit your \`Jenkinsfile\` to your repository. In Jenkins, click "Build Now" for your pipeline. Jenkins will pull the code and execute the stages defined in your \`Jenkinsfile\`.

      ## Conclusion
      Jenkins provides a robust and highly customizable platform for automating your CI/CD workflows. By defining your pipeline as code in a \`Jenkinsfile\`, you ensure consistency and version control for your entire software delivery process.
    `,
  },
  {
    title: "Monitoring with Prometheus + Grafana",
    description: "Learn how to set up comprehensive monitoring for your applications and infrastructure.",
    category: "Monitoring",
    date: "Sep 2024",
    readTime: "6 min read",
    url: "#",
    fullContent: `
      # Monitoring with Prometheus + Grafana

      ## Introduction
      Effective monitoring is essential for maintaining the health and performance of your applications and infrastructure. Prometheus and Grafana are a powerful combination for collecting metrics and visualizing them in intuitive dashboards.

      ## Components
      *   **Prometheus:** A monitoring system that collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts.
      *   **Grafana:** An open-source analytics and interactive visualization web application. It connects to various data sources (like Prometheus) and allows you to create, explore, and share dashboards.

      ## Setup Guide (using Docker Compose)

      ### 1. Create \`docker-compose.yml\`
      \`\`\`yaml
      version: '3.8'

      services:
        prometheus:
          image: prom/prometheus
          container_name: prometheus
          ports:
            - "9090:9090"
          volumes:
            - ./prometheus.yml:/etc/prometheus/prometheus.yml
          command:
            - '--config.file=/etc/prometheus/prometheus.yml'
            - '--storage.tsdb.path=/prometheus'
          restart: unless-stopped

        grafana:
          image: grafana/grafana
          container_name: grafana
          ports:
            - "3000:3000"
          volumes:
            - grafana_data:/var/lib/grafana
          environment:
            - GF_SECURITY_ADMIN_USER=admin
            - GF_SECURITY_ADMIN_PASSWORD=admin
          restart: unless-stopped

      volumes:
        grafana_data:
      \`\`\`

      ### 2. Create \`prometheus.yml\`
      \`\`\`yaml
      # prometheus.yml
      global:
        scrape_interval: 15s

      scrape_configs:
        - job_name: 'prometheus'
          static_configs:
            - targets: ['localhost:9090']
      \`\`\`

      ### 3. Run with Docker Compose
      \`\`\`bash
      docker-compose up -d
      \`\`\`

      ### 4. Access Dashboards
      *   **Prometheus:** \`http://localhost:9090\`
      *   **Grafana:** \`http://localhost:3000\` (login with admin/admin)

      In Grafana, add Prometheus as a data source and start building dashboards!

      ## Conclusion
      Prometheus and Grafana provide a robust and flexible monitoring solution. By collecting metrics and visualizing them effectively, you gain deep insights into your system's performance and can proactively address issues.
    `,
  },
  {
    title: "AWS Basics for DevOps Engineers",
    description: "Essential AWS services every DevOps engineer should know for cloud infrastructure.",
    category: "AWS",
    date: "Aug 2024",
    readTime: "10 min read",
    url: "#",
    fullContent: `
      # AWS Basics for DevOps Engineers

      ## Introduction
      Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform. For DevOps engineers, understanding core AWS services is fundamental for building scalable, reliable, and efficient cloud infrastructure.

      ## Key AWS Services for DevOps

      ### 1. EC2 (Elastic Compute Cloud)
      *   **What it is:** Virtual servers in the cloud.
      *   **DevOps Use:** Hosting applications, CI/CD agents, running batch jobs.
      *   **Concepts:** AMIs, instance types, security groups, key pairs.

      ### 2. S3 (Simple Storage Service)
      *   **What it is:** Object storage for any type of data.
      *   **DevOps Use:** Storing build artifacts, logs, static website hosting, backups.
      *   **Concepts:** Buckets, objects, access control, versioning.

      ### 3. Lambda
      *   **What it is:** Serverless compute service.
      *   **DevOps Use:** Automating tasks (e.g., responding to S3 events, scheduled tasks), running small scripts.
      *   **Concepts:** Functions, triggers, event-driven architecture.

      ### 4. VPC (Virtual Private Cloud)
      *   **What it is:** Isolated virtual network in the AWS cloud.
      *   **DevOps Use:** Defining network architecture, ensuring security and connectivity for resources.
      *   **Concepts:** Subnets, route tables, internet gateways, NAT gateways.

      ### 5. IAM (Identity and Access Management)
      *   **What it is:** Manages access to AWS services and resources.
      *   **DevOps Use:** Creating roles for applications, users for engineers, managing permissions securely.
      *   **Concepts:** Users, groups, roles, policies.

      ### 6. CloudWatch
      *   **What it is:** Monitoring and observability service.
      *   **DevOps Use:** Collecting logs, metrics, setting up alarms, creating dashboards.
      *   **Concepts:** Metrics, logs, alarms, events.

      ### 7. CloudFormation / CDK
      *   **What it is:** Infrastructure as Code (IaC) service.
      *   **DevOps Use:** Automating the provisioning and management of AWS resources.
      *   **Concepts:** Templates, stacks, resource types.

      ## Conclusion
      Mastering these fundamental AWS services will provide a strong foundation for any DevOps engineer working in the cloud. AWS offers a vast ecosystem, and continuous learning is key to leveraging its full potential.
    `,
  },
  {
    title: "My Experience Using Terraform in Projects",
    description: "Real-world insights and best practices from using Infrastructure as Code with Terraform.",
    category: "Terraform",
    date: "Jul 2024",
    readTime: "9 min read",
    url: "#",
    fullContent: `
      # My Experience Using Terraform in Projects

      ## Introduction
      Terraform, by HashiCorp, is an open-source Infrastructure as Code (IaC) tool that allows you to define and provision datacenter infrastructure using a declarative configuration language. My journey with Terraform has transformed how I approach infrastructure management, making it more efficient, repeatable, and less error-prone.

      ## Why Terraform?

      *   **Declarative:** You describe the desired state, and Terraform figures out how to get there.
      *   **Idempotent:** Running the same configuration multiple times yields the same result.
      *   **Cloud Agnostic:** Supports a wide range of cloud providers (AWS, Azure, GCP) and other services.
      *   **State Management:** Keeps track of your infrastructure's state, enabling safe and predictable changes.

      ## Key Learnings and Best Practices

      ### 1. Modularity is King
      Breaking down your infrastructure into reusable modules is crucial for managing complexity. Modules allow you to encapsulate common configurations (e.g., a VPC module, an EC2 instance module) and reuse them across projects.

      \`\`\`terraform
      # Example: Calling a module
      module "vpc" {
        source = "./modules/vpc"
        cidr_block = "10.0.0.0/16"
        public_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
      }
      \`\`\`

      ### 2. State Management is Critical
      Terraform uses a state file to map real-world resources to your configuration. Always store your state remotely (e.g., S3, Terraform Cloud) and enable locking to prevent concurrent modifications.

      \`\`\`terraform
      # Example: S3 backend configuration
      terraform {
        backend "s3" {
          bucket = "my-terraform-state-bucket"
          key    = "path/to/my/state.tfstate"
          region = "us-east-1"
          encrypt = true
          dynamodb_table = "my-terraform-locks"
        }
      }
      \`\`\`

      ### 3. Use \`terraform plan\` Extensively
      \`terraform plan\` shows you what changes Terraform will make before applying them. This is your safety net. Review it carefully, especially in production environments.

      ### 4. Version Control Your Configurations
      Treat your Terraform code like application code. Store it in Git, use branches, and implement pull request reviews.

      ### 5. Manage Secrets Securely
      Never hardcode sensitive information (API keys, passwords) in your Terraform files. Use environment variables, AWS Secrets Manager, HashiCorp Vault, or other secure methods.

      ## Conclusion
      Terraform has significantly improved my infrastructure provisioning workflows. Its declarative nature, modularity, and robust state management make it an indispensable tool for any DevOps engineer. While there's a learning curve, the benefits in terms of automation, consistency, and scalability are immense.
    `,
  },
]

export default function Blog() {
  const { colorIndex } = useTheme()
  const currentColor = colors[colorIndex]

  const getColorClasses = () => {
    const colorMap: {
      [key: string]: { accent: string; tagBg: string; tagText: string; button: string; hoverText: string }
    } = {
      purple: {
        accent: "bg-purple-600 dark:bg-purple-400",
        tagBg: "bg-purple-100 dark:bg-purple-900",
        tagText: "text-purple-600 dark:text-purple-300",
        button: "bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600",
        hoverText: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
      },
      blue: {
        accent: "bg-blue-600 dark:bg-blue-400",
        tagBg: "bg-blue-100 dark:bg-blue-900",
        tagText: "text-blue-600 dark:text-blue-300",
        button: "bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600",
        hoverText: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      },
      emerald: {
        accent: "bg-emerald-600 dark:bg-emerald-400",
        tagBg: "bg-emerald-100 dark:bg-emerald-900",
        tagText: "text-emerald-600 dark:text-emerald-300",
        button: "bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600",
        hoverText: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
      },
      rose: {
        accent: "bg-rose-600 dark:bg-rose-400",
        tagBg: "bg-rose-100 dark:bg-rose-900",
        tagText: "text-rose-600 dark:text-rose-300",
        button: "bg-rose-600 dark:bg-rose-500 hover:bg-rose-700 dark:hover:bg-rose-600",
        hoverText: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
      },
      orange: {
        accent: "bg-orange-600 dark:bg-orange-400",
        tagBg: "bg-orange-100 dark:bg-orange-900",
        tagText: "text-orange-600 dark:text-orange-300",
        button: "bg-orange-600 dark:bg-orange-500 hover:bg-orange-700 dark:hover:bg-orange-600",
        hoverText: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
      },
      cyan: {
        accent: "bg-cyan-600 dark:bg-cyan-400",
        tagBg: "bg-cyan-100 dark:bg-cyan-900",
        tagText: "text-cyan-600 dark:text-cyan-300",
        button: "bg-cyan-600 dark:bg-cyan-500 hover:text-cyan-700 dark:hover:bg-cyan-600",
        hoverText: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
      },
      indigo: {
        accent: "bg-indigo-600 dark:bg-indigo-400",
        tagBg: "bg-indigo-100 dark:bg-indigo-900",
        tagText: "text-indigo-600 dark:text-indigo-300",
        button: "bg-indigo-600 dark:bg-indigo-500 hover:text-indigo-700 dark:hover:bg-indigo-600",
        hoverText: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
      },
      pink: {
        accent: "bg-pink-600 dark:bg-pink-400",
        tagBg: "bg-pink-100 dark:bg-pink-900",
        tagText: "text-pink-600 dark:text-pink-300",
        button: "bg-pink-600 dark:bg-pink-500 hover:text-pink-700 dark:hover:bg-pink-600",
        hoverText: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
      },
    }
    return colorMap[currentColor.name] || colorMap.purple
  }

  const handleReadMore = (post: (typeof blogPosts)[0]) => {
    const htmlContent = marked(post.fullContent)

    const tempElement = document.createElement("div")
    tempElement.innerHTML = `
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; color: #333; }
        h1, h2, h3, h4, h5, h6 { color: #1a202c; margin-top: 1em; margin-bottom: 0.5em; }
        pre { background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 0.9em; }
        code { font-family: 'Courier New', monospace; background-color: #e8e8e8; padding: 2px 4px; border-radius: 3px; }
        pre code { background-color: transparent; padding: 0; }
        p { margin-bottom: 1em; }
        ul, ol { margin-left: 20px; margin-bottom: 1em; }
        a { color: #007bff; text-decoration: none; }
        a:hover { text-decoration: underline; }
        hr { border: 0; border-top: 1px solid #eee; margin: 20px 0; }
        em { font-style: italic; }
        strong { font-weight: bold; }
      </style>
      <h1>${post.title}</h1>
      <p><em>Category: ${post.category} | Date: ${post.date} | Read Time: ${post.readTime}</em></p>
      <hr/>
      ${htmlContent}
    `

    html2pdf()
      .from(tempElement)
      .save(`${post.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`)
  }

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">📝 My DevOps Blog</h2>
          <div className={`w-24 h-1 mx-auto mb-4 transition-colors ${getColorClasses().accent}`}></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Sharing my knowledge and experiences in DevOps, Cloud, and Infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group border border-gray-100 dark:border-gray-700 animate-glowing-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 ${getColorClasses().tagBg} ${getColorClasses().tagText} text-xs font-medium rounded-full transition-colors`}
                  >
                    <Tag size={12} />
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs transition-colors">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                </div>

                <h3
                  className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 ${getColorClasses().hoverText} transition-colors`}
                >
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 transition-colors">
                  {post.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors">{post.readTime}</span>

                  <button
                    onClick={() => handleReadMore(post)}
                    className={`inline-flex items-center gap-2 ${getColorClasses().button} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors group-hover:scale-105`}
                  >
                    Read More
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            View All Posts
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
