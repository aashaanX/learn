values = [0,1]
def fib(n):
	if len(values)>=n:
		return values[n-1]
	else:
		values.append( fib(n-1)+fib(n-2))
		return fib(n-1)+fib(n-2)

print(fib(6))
