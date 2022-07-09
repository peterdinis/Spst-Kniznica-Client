function BorrowingTable() {
    return (
        <>
            <div className="w-full sm:px-6">
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="font-normal text-left pl-4">Project</th>
                                <th className="font-normal text-left pl-12">Progress</th>
                                <th className="font-normal text-left pl-12">Tasks</th>
                                <th className="font-normal text-left pl-20">Budget</th>
                                <th className="font-normal text-left pl-20">Deadline</th>
                                <th className="font-normal text-left pl-16">Members</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects.png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">UX Design &amp; Visual Strategy</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Herman Group</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">72%</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-20 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">32/47</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
                                </td>
                                <td className="pl-16">
                                    <div className="flex items-center">
                                        <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(1).png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Branding</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Cassin, Bradtke and Jacobson</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">18%</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-6 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">09/47</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
                                </td>
                                <td className="pl-16">
                                    <div className="flex items-center">
                                        <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(2).png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Dev Ops</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Weissnat Group</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">28%</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-8 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">32/47</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
                                </td>
                                <td className="pl-16">
                                    <div className="flex items-center">
                                        <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(3).png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Backend Services</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Hoeger - Hirthe</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">94%</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-24 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">32/47</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
                                </td>
                                <td className="pl-16">
                                    <div className="flex items-center">
                                        <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(4).png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">UI Design</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Batz - Yundt</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">81%</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-20 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">32/47</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
                                </td>
                                <td className="pl-16">
                                    <div className="flex items-center">
                                        <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(5).png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">UX Strategy</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Erdman Group</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">37%</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-14 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">32/47</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
                                </td>
                                <td className="pl-16">
                                    <div className="flex items-center">
                                        <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(6).png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Website Development</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Dickens - Pacocha</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">58%</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-16 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">32/47</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
                                </td>
                                <td className="pl-16">
                                    <div className="flex items-center">
                                        <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(7).png" />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Mobile App Development</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">O'Kon Inc</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">42%</p>
                                    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                                        <div className="w-12 h-3 bg-green-progress rounded-full" />
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">32/47</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">$13,000</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">22.12.21</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
                                </td>
                                <td className="pl-16">
                                    <div className="flex items-center">
                                        <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                        <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default BorrowingTable;
