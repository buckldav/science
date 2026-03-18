"""
generates pseudo-turbulant flow data
"""

import numpy as np
import matplotlib.pyplot as plt
import random

DT = 0.05
WIBBLY_WOBBLY_NESS = 0.5
U0 = 30
Y_LOWER = U0 - WIBBLY_WOBBLY_NESS * 10
Y_UPPER = U0 + WIBBLY_WOBBLY_NESS * 10
steps = 50
time = np.linspace(0, steps * DT, steps)


def variance():
    return (random.random() - 0.5) * WIBBLY_WOBBLY_NESS


def u_of_t(u_avg: int, steps: int):
    """
    arithmetic sequence
    u_n = u_avg + du
    """
    u = np.zeros(steps)
    for i in range(0, steps):
        u[i] = u_avg + variance()
    return u


u_values = u_of_t(U0, steps)

plt.figure(figsize=(10, 5))
plt.plot(time, u_values, marker='o')
plt.title('Graph of u(t)')
plt.ylim(Y_LOWER, Y_UPPER)
plt.xlabel('Time (s)')
plt.ylabel('u(t)')
plt.grid()
plt.show()
