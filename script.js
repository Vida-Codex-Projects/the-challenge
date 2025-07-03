 
 
const suggestions = {
    mindset: [
      "Reframe failure as feedback.",
      "You are not your thoughts—observe them, don't obey them.",
      "Start your day with 3 empowering affirmations.",
      "Focus on progress, not perfection.",
      "Every belief can be challenged—especially the limiting ones.",
      "What if it works out better than you expected?"
    ],
    productivity: [
      "Do one thing right now—just one.",
      "Set a timer for 15 minutes and focus deeply.",
      "Break your task into the smallest next step.",
      "Mute notifications and reclaim your mental space.",
      "You don't need motivation—just momentum.",
      "Create before you consume."
    ],
    resilience: [
      "Take 3 deep breaths—reset your nervous system.",
      "You've made it through tough days before—you will again.",
      "Write down what you *can* control today.",
      "Rest is productive—don't guilt yourself for needing it.",
      "Turn emotional discomfort into curiosity.",
      "Your worth is not tied to your productivity."
    ]
};
 
function generate(category) {
    const output = document.getElementById(`${category}-suggestion`);
    const ideas = suggestions[category];
    const idea = ideas[Math.floor(Math.random() * ideas.length)];
    output.textContent = idea;
}
  
function showForm() {
    document.getElementById("inspirationForm").style.display = "flex";
}

function submitForm(event) {
    event.preventDefault();
    alert("Thank you for subscribing!")
}