
def get_classroom_location(classroom):
    locations = {
        'E101': 'E Wing, Ground Floor, Mechanical Engineering Department, Class Room 1',
        'E102': 'E Wing, Ground Floor, Mechanical Engineering Department, Class Room 2',
        'E103I': 'E Wing, Ground Floor, Mechanical Engineering Department, Mechatronics Laboratory',
        'E103II': 'E Wing, Ground Floor, Mechanical Engineering Department, DSL Lab',
        'E104': 'E Wing, Ground Floor, Mechanical Engineering Department, Electrical Control Room',
        'E105': 'E Wing, Ground Floor, Mechanical Engineering Department, Lavatory (Gents)',
        'E106': 'E Wing, Ground Floor, Mechanical Engineering Department, Engine Laboratory',
        'E107': 'E Wing, Ground Floor, Mechanical Engineering Department, Assistant Professor\'s Room',
        'E108': 'E Wing, Ground Floor, Mechanical Engineering Department, Machine Laboratory',
        'E201': 'E Wing, First Floor, Mechanical Engineering Department, Class Room 3',
        'E202': 'E Wing, First Floor, Mechanical Engineering Department, Class Room 4',
        'E203': 'E Wing, First Floor, Mechanical Engineering Department, Model Lab',
        'E204': 'E Wing, First Floor, Mechanical Engineering Department, Store Room',
        'E205': 'E Wing, First Floor, Mechanical Engineering Department, Lavatory (Gents)',
        'E206I': 'E Wing, First Floor, Mechanical Engineering Department, Heat Transfer Lab',
        'E206II': 'E Wing, First Floor, Mechanical Engineering Department, RAC Lab',
        'E207': 'E Wing, First Floor, Mechanical Engineering Department, H.O.D. Office',
        'E208': 'E Wing, First Floor, Mechanical Engineering Department, Design Hall',
        'F205': 'E Wing, First Floor, Mechanical Engineering Department, Cad Lab',
        'F206': 'E Wing, First Floor, Mechanical Engineering Department, Staff Room',
        'F207': 'E Wing, First Floor, Mechanical Engineering Department, Departmental Library',
        'F208': 'E Wing, First Floor, Mechanical Engineering Department, Ladies Room',
        'E301': 'E Wing, Second Floor, Computer Engineering Department, Class Room 1',
        'E302': 'E Wing, Second Floor, Computer Engineering Department, Class Room 2',
        'E303I': 'E Wing, Second Floor, Computer Engineering Department, System Software Lab',
        'E303II': 'E Wing, Second Floor, Computer Engineering Department, Database System Lab',
        'E304': 'E Wing, Second Floor, Computer Engineering Department, Maintenance Room',
        'E305': 'E Wing, Second Floor, Computer Engineering Department, Lavatory I (Ladies)',
        'E306I': 'E Wing, Second Floor, Computer Engineering Department, Research Lab',
        'E306II': 'E Wing, Second Floor, Computer Engineering Department, Tutorial Room I (PG)',
        'E307': 'E Wing, Second Floor, Computer Engineering Department, HOD Cabin',
        'E308I': 'E Wing, Second Floor, Computer Engineering Department, Tutorial Room II (PG)',
        'E308II': 'E Wing, Second Floor, Computer Engineering Department, Object Oriented Programming Lab',
        'E401': 'E Wing, Third Floor, Computer Engineering Department, Class Room 3',
        'E402': 'E Wing, Third Floor, Computer Engineering Department, Class Room 4',
        'E403I': 'E Wing, Third Floor, Computer Engineering Department, Microprocessor Lab',
        'E404': 'E Wing, Third Floor, Computer Engineering Department, Store Room',
        'E403I': 'E Wing, Third Floor, Computer Engineering Department, Tutorial Room I (UG)',
        'E405': 'E Wing, Third Floor, Computer Engineering Department, Lavatory II (Gents)',
        'E406I': 'E Wing, Third Floor, Computer Engineering Department, Basic Electronics Lab',
        'E406II': 'E Wing, Third Floor, Computer Engineering Department, Tutorial Room II (UG)',
        'E407': 'E Wing, Third Floor, Computer Engineering Department, Faculty Room I',
        'E408I': 'E Wing, Third Floor, Computer Engineering Department, System Security Lab',
        'E408II': 'E Wing, Third Floor, Computer Engineering Department, Project Lab',
        'E501': 'E Wing, Fourth Floor, Department of Computer Engineering, Class Room 5',
        'E502': 'E Wing, Fourth Floor, Department of Computer Engineering, Class Room 6',
        'E503I': 'E Wing, Fourth Floor, Department of Computer Engineering, Programming Lab I',
        'E503II': 'E Wing, Fourth Floor, Department of Computer Engineering, Programming Lab II',
        'E504': 'E Wing, Fourth Floor, Department of Computer Engineering, UPS Room',
        'E505': 'E Wing, Fourth Floor, Department of Computer Engineering, Lavatory III (Ladies)',
        'E506I': 'E Wing, Fourth Floor, Department of Computer Engineering, Post Graduate Lab II',
        'E506II': 'E Wing, Fourth Floor, Department of Computer Engineering, Business Intelligence Lab',
        'E507': 'E Wing, Fourth Floor, Department of Computer Engineering, Faculty Room II',
        'E508': 'E Wing, Fourth Floor, Department of Computer Engineering, John Von Neumann Hall (JVN Hall)'
    }

    general_names = {
        'CLASS ROOM 1': ['E Wing, Ground Floor, Mechanical Engineering Department'],
        'CLASS ROOM 2': ['E Wing, Ground Floor, Mechanical Engineering Department'],
        'MECHATRONICS LABORATORY': ['E Wing, Ground Floor, Mechanical Engineering Department'],
        'DSL LAB': ['E Wing, Ground Floor, Mechanical Engineering Department'],
        'ELECTRICAL CONTROL ROOM': ['E Wing, Ground Floor, Mechanical Engineering Department'],
        'MALE WASHROOM': ['E Wing, Ground Floor, Mechanical Engineering Department'],
        'ENGINE LABORATORY': ['E Wing, Ground Floor, Mechanical Engineering Department'],
        'ASSISTANT PROFESSOR\'S ROOM': ['E Wing, Ground Floor, Mechanical Engineering Department'],
        'MACHINE LABORATORY': ['E Wing, Ground Floor, Mechanical Engineering Department'],
        'CLASS ROOM 3': ['E Wing, First Floor, Mechanical Engineering Department'],
        'CLASS ROOM 4': ['E Wing, First Floor, Mechanical Engineering Department'],
        'MODEL LAB': ['E Wing, First Floor, Mechanical Engineering Department'],
        'STORE ROOM': ['E Wing, First Floor, Mechanical Engineering Department'],
        'FEMALE WASHROOM': ['E Wing, First Floor, Mechanical Engineering Department'],
        'HEAT TRANSFER LAB': ['E Wing, First Floor, Mechanical Engineering Department'],
        'RAC LAB': ['E Wing, First Floor, Mechanical Engineering Department'],
        'HOD CABIN': ['E Wing, First Floor, Mechanical Engineering Department'],
        'DESIGN HALL': ['E Wing, First Floor, Mechanical Engineering Department'],
        'CAD LAB': ['E Wing, First Floor, Mechanical Engineering Department'],
        'STAFF ROOM': ['E Wing, First Floor, Mechanical Engineering Department'],
        'DEPARTMENTAL LIBRARY': ['E Wing, First Floor, Mechanical Engineering Department'],
        'LADIES ROOM': ['E Wing, First Floor, Mechanical Engineering Department'],
        'CLASS ROOM 1': ['E Wing, Second Floor, Computer Engineering Department'],
        'CLASS ROOM 2': ['E Wing, Second Floor, Computer Engineering Department'],
        'SYSTEM SOFTWARE LAB': ['E Wing, Second Floor, Computer Engineering Department'],
        'DATABASE SYSTEM LAB': ['E Wing, Second Floor, Computer Engineering Department'],
        'MAINTENANCE ROOM': ['E Wing, Second Floor, Computer Engineering Department'],
        'FEMALE WASHROOM': ['E Wing, Second Floor, Computer Engineering Department'],
        'RESEARCH LAB': ['E Wing, Second Floor, Computer Engineering Department'],
        'TUTORIAL ROOM I PG': ['E Wing, Second Floor, Computer Engineering Department'],
        'HOD CABIN': ['E Wing, Second Floor, Computer Engineering Department'],
        'TUTORIAL ROOM II PG': ['E Wing, Second Floor, Computer Engineering Department'],
        'OBJECT ORIENTED PROGRAMMING LAB': ['E Wing, Second Floor, Computer Engineering Department'],
        'CLASS ROOM 3': ['E Wing, Third Floor, Computer Engineering Department'],
        'CLASS ROOM 4': ['E Wing, Third Floor, Computer Engineering Department'],
        'MICROPROCESSOR LAB': ['E Wing, Third Floor, Computer Engineering Department'],
        'STORE ROOM': ['E Wing, Third Floor, Computer Engineering Department'],
        'TUTORIAL ROOM I (UG)': ['E Wing, Third Floor, Computer Engineering Department'],
        'MALE WASHROOM': ['E Wing, Third Floor, Computer Engineering Department'],
        'BASIC ELECTRONICS LAB': ['E Wing, Third Floor, Computer Engineering Department'],
        'TUTORIAL ROOM II (UG)': ['E Wing, Third Floor, Computer Engineering Department'],
        'FACULTY ROOM I': ['E Wing, Third Floor, Computer Engineering Department'],
        'SYSTEM SECURITY LAB': ['E Wing, Third Floor, Computer Engineering Department'],
        'PROJECT LAB': ['E Wing, Third Floor, Computer Engineering Department'],
        'CLASS ROOM 5': ['E Wing, Fourth Floor, Department of Computer Engineering'],
        'CLASS ROOM 6': ['E Wing, Fourth Floor, Department of Computer Engineering'],
        'PROGRAMMING LAB I': ['E Wing, Fourth Floor, Department of Computer Engineering'],
        'PROGRAMMING LAB II': ['E Wing, Fourth Floor, Department of Computer Engineering'],
        'UPS ROOM': ['E Wing, Fourth Floor, Department of Computer Engineering'],
        'FEMALE WASHROOM': ['E Wing, Fourth Floor, Department of Computer Engineering'],
        'POST GRADUATE LAB II': ['E Wing, Fourth Floor, Department of Computer Engineering'],
        'BUSINESS INTELLIGENCE LAB': ['E Wing, Fourth Floor, Department of Computer Engineering'],
        'FACULTY ROOM II': ['E Wing, Fourth Floor, Department of Computer Engineering'],
        'JVN HALL': ['E Wing, Fourth Floor, Department of Computer Engineering']
    }

    if classroom.upper() in general_names:
        return ', '.join(general_names[classroom.upper()])

    classroom = classroom.upper().replace('-', '').replace(' ', '')
    return locations.get(classroom, 'Classroom not found.')