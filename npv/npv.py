import tkinter as tk

def calculate_metrics():
    initial_investment = float(initial_investment_entry.get())
    discount_rate = float(discount_rate_entry.get())
    cash_flows = [float(cf.get()) for cf in cash_flow_entries]

    # Calculate NPV
    npv = -initial_investment
    for t, cash_flow in enumerate(cash_flows):
        npv += cash_flow / (1 + discount_rate) ** t

    # Calculate ROI
    total_revenues = sum([cf for cf in cash_flows if cf > 0])
    total_costs = sum([cf for cf in cash_flows if cf < 0])
    net_profit = total_revenues - total_costs
    num_periods=len(cash_flows)
    roi = ((net_profit / num_periods)/initial_investment) * 100

    # Calculate Payback Period
    cumulative_cash_flow = 0
    payback_period = 0
    for cash_flow in cash_flows:
        cumulative_cash_flow += cash_flow
        payback_period += 1
        if cumulative_cash_flow >= initial_investment:
            break

    # Update the result labels
    npv_label.config(text=f"Net Present Value (NPV): {npv}")
    roi_label.config(text=f"Return on Investment (ROI): {roi}%")
    payback_label.config(text=f"Payback Period: {payback_period} periods")
    profit_label.config(text=f"Net Profit: {net_profit}")

# Create the main window
window = tk.Tk()
window.title("Financial Metrics Calculator")

# Initial Investment Input
initial_investment_label = tk.Label(window, text="Initial Investment:")
initial_investment_label.pack()
initial_investment_entry = tk.Entry(window)
initial_investment_entry.pack()

# Discount Rate Input
discount_rate_label = tk.Label(window, text="Discount Rate (as decimal):")
discount_rate_label.pack()
discount_rate_entry = tk.Entry(window)
discount_rate_entry.pack()

# Cash Flow Inputs
cash_flow_entries = []
num_periods = 5  # Adjust the number of periods as needed
for i in range(num_periods):
    cash_flow_label = tk.Label(window, text=f"Cash Flow for Period {i + 1}:")
    cash_flow_label.pack()
    cash_flow_entry = tk.Entry(window)
    cash_flow_entry.pack()
    cash_flow_entries.append(cash_flow_entry)

# Calculate Button
calculate_button = tk.Button(window, text="Calculate", command=calculate_metrics)
calculate_button.pack()

# Result Labels
npv_label = tk.Label(window, text="")
npv_label.pack()
roi_label = tk.Label(window, text="")
roi_label.pack()
payback_label = tk.Label(window, text="")
payback_label.pack()
profit_label = tk.Label(window, text="")
profit_label.pack()

# Start the GUI main loop
window.mainloop()