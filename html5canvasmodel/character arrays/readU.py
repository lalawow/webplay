character = "u"
rows = 10
columns = 16
filename = "u.txt"
output_filename = "uarray.js"

my_file = open(filename, "r")
my_output = open(output_filename, "w")
n = 0
x = []
y = []
for i in range(rows):
	line = my_file.readline()
	for j in range(columns):
		if (line[j] != "0"):
			n = n + 1
			x.append(j)
			y.append(i)

my_output.write("n="+str(n)+"\n")

my_output.write("x=["+str(x[0]))
for i in range(1,n):
	my_output.write(","+str(x[i]))
my_output.write("]\n")

my_output.write("y=["+str(y[0]))
for i in range(1,n):
	my_output.write(","+str(y[i]))
my_output.write("]\n")

my_file.close()
my_output.close()


