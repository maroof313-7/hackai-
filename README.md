# AI Business Strategy Generator (StratGen)

## Overview
StratGen is a cutting-edge application designed to generate detailed business strategies using Generative AI. By leveraging the capabilities of the GPT-2 model, this application assists entrepreneurs and businesses in crafting actionable strategies tailored to various business challenges. StratGen outputs comprehensive reports, making it an essential tool for business planning and strategy development.

## Features
- **Business Strategy Generation**: Automatically generates in-depth strategies based on user-defined business challenges.
- **Customizable Inputs**: Users can specify parameters such as target audience, budget, and goals to tailor the output to their needs.
- **Comprehensive Reporting**: Outputs a structured report that details the generated strategy, including marketing tactics and sales projections.
- **Presentation Support**: Generates PowerPoint presentations of the business strategy for easy sharing and presentation to stakeholders.

## Installation
To run this project, you need to set up NVIDIA AI Workbench on your local machine. Ensure you have the necessary prerequisites, including NVIDIA AI Workbench, which you can install by following the guide provided by NVIDIA. The application is compatible with systems running Windows, macOS, or Linux with NVIDIA GPUs. You will also need Python 3.x installed on your system.

### Python Libraries
You need to install the following Python libraries: `transformers==4.11.3`, `torch`, `pandas`, and `python-pptx`. You can install these libraries by running the command `pip install transformers==4.11.3 torch pandas python-pptx`.

### Node.js Libraries
If you're using Express for any part of your project, ensure the necessary Node.js libraries, including `express`, `body-parser`, and `cors`, are installed using the command `npm install express body-parser cors`.

### Optional: React Setup
If you plan to create a web interface for your application, you can also set up React. You can create a new React app using the command `npx create-react-app stratgen-ui`. This will create a new directory named `stratgen-ui`, where you can develop your React frontend.

## How to Run the Project
1. Open NVIDIA AI Workbench to start the environment.
2. Navigate to the project directory where `generate_strategy.py` is located.
3. Activate your local environment using the command `nvwb activate local`.
4. To run the strategy generator, execute `python generate_strategy.py` and follow the on-screen prompts to input your business challenge, target audience, and other parameters.
5. After processing, the generated strategy will be displayed in the terminal, along with a detailed business strategy report. If you wish to create a PowerPoint presentation of the strategy, execute `python presentation_generate.py`.

## Usage Restrictions
This project is designed for educational and experimental purposes. It is advised to review and modify the generated strategies according to your specific business context. Ensure compliance with the licenses of the models and libraries used in this project.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## HackAI - The Dell & NVIDIA Challenge
StratGen is being developed as part of the HackAI - Dell & NVIDIA Challenge, aimed at creating innovative solutions using generative AI technology.
