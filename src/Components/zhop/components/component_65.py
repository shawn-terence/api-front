import random
import math
import math
import math
import math
import math
import math
import math

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