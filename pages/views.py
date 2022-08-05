from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request,'pages/index.html')

# def about(request):
#     return render(request,'pages/about.html')

def about(request):
    x = 10
    y = -20
    foods=['tea','coffee','Pepsi']
    students = {
        'Tom' : 80,
        'Jerry' : 45,
        'Casper' : 47,
        'Spike' : 75
    }
    context = {
        'var' : x,
        'y' : y,
        'foods': foods,
        'students' : students
    }
    return render(request,'pages/about.html',context)

def contact(request):
    return render(request,'pages/contact.html')



