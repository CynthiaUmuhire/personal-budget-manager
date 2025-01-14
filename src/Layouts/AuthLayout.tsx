import { NavLink, Outlet } from "react-router-dom";

export default function AuthLayout() {
      const subTabs = [
            { path: '/auth', name: 'Home' },
            { path: '/transactions', name: 'Transactions' },
            { path: '/budgets', name: 'Budgets' },
            { path: '/reports', name: 'Reports' },
      ]
      return (
            <section className="bg-black text-primary-eggWhite h-svh overflow-hidden">
                  <header className="border-b border-primary-eggWhite flex flex-col md:flex-row justify-between px-10 items-center h-16 md:h-20 max-w-full mx-auto">
                        <div>
                              <p>
                                    <span className="text-3xl font-bold text-primary-eggWhite">Budget</span>
                                    <span className="text-3xl font-bold  text-tertiary-successGreen"> Manager</span>
                              </p>
                        </div>
                        <div className="flex justify-between items-center gap-2 md:gap-5">
                              {
                                    subTabs.map((tab, index) => (
                                          <NavLink key={index} to={tab.path} className={({ isActive }) => isActive ? "text-tertiary-successGreen text-base md:text-lg font-medium  underline" : " text-base md:text-lg font-medium "}>
                                                {tab.name}
                                          </NavLink>
                                    ))
                              }
                        </div>
                  </header>
                  <div>
                        <Outlet />
                  </div>
            </section>
      )
}