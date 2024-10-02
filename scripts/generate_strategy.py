from transformers import pipeline
import csv
from datetime import datetime
import os

# Load the GPT-2 model for text generation
generator = pipeline('text-generation', model='gpt2')

def generate_business_strategy(input_text):
    try:
        # Generate strategy based on user input
        result = generator(input_text, max_length=600, num_return_sequences=1)
        return result[0]['generated_text']
    except Exception as e:
        print(f"Error generating strategy: {e}")
        return "Error generating strategy."

def log_strategy(strategy, user_input):
    # Save each generated strategy to a log file
    try:
        log_path = os.path.join("..", "data", "strategy_log.txt")
        with open(log_path, "a") as f:
            f.write(f"Business Challenge: {user_input}\nGenerated Strategy:\n{strategy}\n{'-'*80}\n")
    except Exception as e:
        print(f"Error logging strategy to txt: {e}")

def log_strategy_csv(strategy, business_goal, target_audience, budget, marketing_channels):
    # Log strategy to CSV with additional details
    try:
        csv_path = os.path.join("..", "data", "strategy_log.csv")
        with open(csv_path, "a", newline="") as f:
            writer = csv.writer(f)
            writer.writerow([datetime.now(), business_goal, target_audience, budget, marketing_channels, strategy])
    except Exception as e:
        print(f"Error logging strategy to CSV: {e}")

def format_strategy(strategy, business_goal, target_audience, budget):
    # Format the strategy output for better readability
    formatted = (
        f"--- Business Strategy Report ---\n"
        f"1. **Business Challenge:** {business_goal}\n"
        f"2. **Target Audience:** {target_audience}\n"
        f"3. **Budget:** {budget}\n"
        f"4. **Strategy:**\n"
        f"{strategy}\n"
        f"--- End of Report ---\n"
    )
    return formatted

if __name__ == "__main__":
    business_goal = input("Enter your primary business goal (e.g., Increase sales by 20%): ")
    target_audience = input("Enter your target audience (e.g., small businesses, young adults, etc.): ")
    budget = input("Enter your budget for this strategy (e.g., $10,000): ")
    marketing_channels = input("Enter preferred marketing channels (e.g., social media, email): ")

    # Prepare detailed input for strategy generation
    detailed_input = (
        f"Create a detailed business strategy to {business_goal}. "
        f"Targeting {target_audience}, with a budget of {budget}. "
        f"Focus on marketing channels: {marketing_channels}. "
        "Include actionable marketing tactics, comprehensive team training methods, "
        "specific steps to achieve the goal, measurable outcomes to track progress, "
        "and necessary resources or tools required."
    )

    # Generate and format the strategy
    strategy = generate_business_strategy(detailed_input)
    formatted_strategy = format_strategy(strategy, business_goal, target_audience, budget)

    # Display the generated strategy
    print("\nGenerated Business Strategy:\n")
    print(formatted_strategy)

    # Log the strategy in both txt and csv formats
    log_strategy(formatted_strategy, business_goal)
    log_strategy_csv(formatted_strategy, business_goal, target_audience, budget, marketing_channels)
