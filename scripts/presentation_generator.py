from pptx import Presentation
import os

def create_presentation_with_template(strategy, business_goal, target_audience, budget):
    """Create a PowerPoint presentation using a custom template with generated strategy details."""
    
    # Define paths
    template_path = os.path.join(os.getcwd(), "data", "custom_template.pptx")  # Correct path to the template
    output_path = os.path.join(os.getcwd(), "data", "business_strategy_with_template.pptx")  # Output path in the data folder

    # Load the custom template
    prs = Presentation(template_path)

    # (Rest of your presentation generation code here...)

    # Save the presentation
    prs.save(output_path)
    print(f"Presentation with template created at: {output_path}")

if __name__ == "__main__":
    # Sample inputs (replace these with actual values from your strategy generation process)
    strategy = "This is a sample strategy."
    business_goal = "Increase sales by 20%"
    target_audience = "Young Adults"
    budget = "$10,000"

    # Call the function to create the presentation
    create_presentation_with_template(strategy, business_goal, target_audience, budget)
