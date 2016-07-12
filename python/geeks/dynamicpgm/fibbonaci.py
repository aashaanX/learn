""" Basic Fibonacci function which will print the n-th fibonacci number"""

def fib(n):
	# base case 1
	if n==1:
		return 0
	# base case 2
	elif n==2:
		return 1
	# recurrsive statement
	else:
		return fib(n-1)+fib(n-2)

print(fib(6))
