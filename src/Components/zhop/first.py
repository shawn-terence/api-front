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
import random
import time
import subprocess

repo_dir = "/home/user/Desktop/gitmambo//api-front/src/Components/zhop/components"

os.chdir(repo_dir)

commit_messages = [
    "Update React form with new fields",
    "Improve TypeScript counter logic",
    "Enhance Python sorting algorithm",
    "Add new feature to JavaScript function",
    "Refactor component structure",
    "Fix minor issues in code logic",
    "Add comments to clarify functionality",
    "Improve performance of the module",
    "Optimize imports and dependencies",
    "Update file with latest requirements",
]

def generate_commit_message():
    return random.choice(commit_messages)

def get_random_file():
    files = [
        f for f in os.listdir(repo_dir) 
        if f.endswith(('.jsx', '.js', '.ts', '.py'))
    ]
    return random.choice(files) if files else None

def update_file(file_name):
    with open(file_name, 'r') as file:
        content = file.readlines()

    if file_name.endswith('.jsx'):
        content.insert(-2, '    <p>Updated: React form now includes extra information.</p>\n')
    elif file_name.endswith('.ts'):
        content.append('\nconsole.log("Update: Logging year info after changes.");\n')
    elif file_name.endswith('.py'):
        content.insert(1, 'import math\n')
    elif file_name.endswith('.js'):
        content.append('\nconsole.log("Update: Improved functionality for JavaScript debounce.");\n')

    with open(file_name, 'w') as file:
        file.writelines(content)

    return file_name

def make_commit(file_name):
    commit_message = generate_commit_message()
    subprocess.run(["git", "add", file_name])
    subprocess.run(["git", "commit", "-m", commit_message])
    print(f"Updated {file_name}")
    print(f"[{commit_message}]")
    subprocess.run(["git", "push", "origin", "main"])
    print("Changes pushed to remote repository.")
    
def main():
    num_updates = random.randint(39, 50)
    print(f"Making {num_updates} updates to existing components...")

    for _ in range(num_updates):
        file_name = get_random_file()
        if not file_name:
            print("No files to update.")
            break
        updated_file = update_file(file_name)
        make_commit(updated_file)
        delay = random.randint(30, 90)
        print(f"Waiting for {delay} seconds before the next update...")
        time.sleep(delay)

if __name__ == "__main__":
    main()
