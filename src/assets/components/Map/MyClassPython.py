class MyClass:
    """ Базовый класс """
    emp_count = 0

    def __init__(self,name,salary):
        self.name = name
        self.salary = salary
        MyClass.emp_count += 1
        
        
    def displayCount(self):
        print("Total Employee %d" % MyClass.emp_count)
    
        
    def displayEmployee(self): 
        print("Name : %s, Salary : %d" % (self.name,self.salary))
        
emp1 = MyClass("Zara", 2000)
print(emp1.name)  