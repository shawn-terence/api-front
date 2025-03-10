import os
import math
import math
import math
import math
import math
import math
import math
import math
import math
import math
import math
import math
import math
import math
import math
import random
import time
import subprocess
from datetime import datetime

repo_dir = "/home/user/Desktop/gitmambo/api-front/src/Components/zhop/components"
os.chdir(repo_dir)

commit_messages = [
    "Refactor code structure",
    "Fix bug in user authentication",
    "Update README with new instructions",
    "Add new feature for user profile",
    "Optimize database queries",
    "Improve UI responsiveness",
    "Fix issue with file upload",
    "Update dependencies for security",
    "Refactor API routes for clarity",
    "Add unit tests for the new module",
    "Enhance performance of data processing",
    "Fix typo in variable names",
    "Clean up unused variables",
    "Update user interface design",
    "Refactor front-end components",
    "Fix memory leak in background processes",
    "Add logging for better debugging",
    "Improve error handling in API",
    "Update user documentation",
    "Initial commit for feature X"
]

def generate_commit_message():
    return random.choice(commit_messages)

def create_new_component():
    component_types = ["jsx", "ts", "py", "js"]
    component_type = random.choice(component_types)
    file_name = f"component_{random.randint(1, 100)}.{component_type if component_type != 'py' else 'py'}"
    
    if component_type == "jsx":
        content = """
import React, { useState } from 'react';

function ExampleForm() {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: Name - ${formData.name}, Email - ${formData.email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ExampleForm;
"""
    elif component_type == "ts":
        content = """
const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const logYearInfo = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;

    const monthsRemaining = 12 - now.getMonth();
    const isNewYear = now.getMonth() === 0 && now.getDate() === 1;

    console.log(isNewYear 
        ? 'Happy New Year!' 
        : `Next New Year is in ${monthsRemaining} months.`);
    
    console.log(`Current year: ${currentYear}, Is leap year: ${isLeapYear(currentYear)}`);
    console.log(`Next year: ${nextYear}, Is leap year: ${isLeapYear(nextYear)}`);
};

logYearInfo();
"""
    elif component_type == "py":
        content = """
import random

def sort_numbers():
    numbers = random.sample(range(1, 101), 50)
    primes = [n for n in numbers if n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))]
    evens = [n for n in numbers if n % 2 == 0]
    odds = [n for n in numbers if n % 2 != 0 and n not in primes]
    return {'primes': primes, 'evens': evens, 'odds': odds}

if __name__ == "__main__":
    sorted_numbers = sort_numbers()
    print(f"Primes: {sorted_numbers['primes']}")
    print(f"Evens: {sorted_numbers['evens']}")
    print(f"Odds: {sorted_numbers['odds']}")
"""
    elif component_type == "js":
        content = """
function debounce(func, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => func.apply(this, args), delay);
    };
}

const logMessage = debounce((msg) => console.log(msg), 1000);

logMessage("This message will be logged after 1 second of inactivity.");
"""
    else:
        content = "Unsupported component type"

    with open(file_name, 'w') as file:
        file.write(content.strip())
    return file_name

def make_commit(file_name):
    commit_message = generate_commit_message()
    subprocess.run(["git", "add", file_name])
    subprocess.run(["git", "commit", "-m", commit_message])
    print(f"Created {file_name}")
    print(f"[{commit_message}]")
    subprocess.run(["git", "push", "origin", "main"])
    print("Changes pushed to remote repository.")
    
def main():
    num_commits = random.randint(39, 50)
    print(f"Creating {num_commits} commits today...")
    for _ in range(num_commits):
        file_name = create_new_component()
        make_commit(file_name)
        delay = random.randint(60, 120)
        print(f"Waiting for {delay} seconds before the next commit...")
        time.sleep(delay)

if __name__ == "__main__":
    main()
