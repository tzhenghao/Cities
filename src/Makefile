# Zheng Hao Tan
# Makefile.
# Type 'make' and then whatever that follows to compile the code.

#Enables C++11
PATH := /usr/um/gcc-4.7.0/bin:$(PATH)
LD_LIBRARY_PATH := /usr/um/gcc-4.7.0/lib64
LD_RUN_PATH := /usr/um/gcc-4.7.0/lib64

#Default Flags
FLAGS = -Wall -Wextra -pedantic -Wvla -std=c++11

# make release - will compile "all" with $(FLAGS) and the O3 flag
release: FLAGS += -O3
release: all

# make debug - will compile "all" with $(FLAGS) and the g flag
debug: FLAGS += -g
debug: all

gProf: FLAGS += -pg
gProf: all

all: cities.o
	g++ $(FLAGS) cities.o -o cities

cities.o: main.cpp
	g++ $(FLAGS) -c main.cpp

# make clean - remove .o files and the executable file.
clean:
	rm -f *.o cities

# That's all folks!
