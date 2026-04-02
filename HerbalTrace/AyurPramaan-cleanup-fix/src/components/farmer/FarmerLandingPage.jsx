import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  PlayCircle, 
  BarChart3, 
  Leaf,
  MapPin,
  Camera,
  Wifi,
  WifiOff,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  Clock,
  Navigation,
  Thermometer,
  Droplets,
  Eye,
  Star,
  TrendingUp,
  Coins,
  Award,
  Calendar,
  Package,
  Target,
  Plus,
  Search,
  Filter,
  X,
  RefreshCw,
  Download,
  Upload,
  Send,
  Shield,
  Globe,
  Zap,
  Activity,
  DollarSign,
  MessageCircle
} from 'lucide-react'
import DashboardNavbar from '../common/DashboardNavbar'

const FarmerLandingPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [isOnline, setIsOnline] = useState(true)
  const [currentLocation, setCurrentLocation] = useState(null)
  const [newCollectionEvent, setNewCollectionEvent] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showHandoverModal, setShowHandoverModal] = useState(false)
  const [showComplaintModal, setShowComplaintModal] = useState(false)

  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }, [])

  // Simulate GPS location capture
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        })
      })
    }
  }, [])

  const farmerStats = [
    { id: 1, title: 'Collections Today', value: '0', change: '0', trend: 'up', icon: Package, color: 'blue' },
    { id: 2, title: 'Quality Score', value: '0%', change: '0%', trend: 'up', icon: Star, color: 'green' },
    { id: 3, title: 'Monthly Earnings', value: '₹0', change: '0%', trend: 'up', icon: Coins, color: 'purple' },
    { id: 4, title: 'Active Alerts', value: '0', change: '0', trend: 'up', icon: AlertTriangle, color: 'orange' }
  ]

  const collectionEvents = [
    {
      id: 'COL-2025-847',
      species: 'Ashwagandha',
      location: { lat: 19.0760, lng: 72.8777, name: 'Field Section A' },
      quantity: '2.5 kg',
      moisture: '12.3%',
      quality: 'Grade A',
      timestamp: '2025-12-02 09:15:23',
      status: 'Completed',
      photos: ['herb1.jpg', 'herb2.jpg'],
      gpsAccuracy: '3.2m'
    },
    {
      id: 'COL-2025-846',
      species: 'Turmeric',
      location: { lat: 19.0761, lng: 72.8778, name: 'Field Section B' },
      quantity: '4.1 kg',
      moisture: '14.8%',
      quality: 'Grade B+',
      timestamp: '2025-12-02 07:45:12',
      status: 'Pending Sync',
      photos: ['turmeric1.jpg'],
      gpsAccuracy: '2.8m'
    },
    {
      id: 'COL-2025-845',
      species: 'Brahmi',
      location: { lat: 19.0759, lng: 72.8776, name: 'Pond Side Area' },
      quantity: '1.8 kg',
      moisture: '16.2%',
      quality: 'Grade A+',
      timestamp: '2025-12-01 16:30:45',
      status: 'Synced',
      photos: ['brahmi1.jpg', 'brahmi2.jpg', 'brahmi3.jpg'],
      gpsAccuracy: '4.1m'
    }
  ]

  const alerts = [
    {
      id: 1,
      type: 'Seasonal Restriction',
      message: 'Shankhpushpi collection restricted until January 15, 2026',
      severity: 'High',
      species: 'Shankhpushpi',
      validUntil: '2026-01-15'
    },
    {
      id: 2,
      type: 'Geo-fence Violation',
      message: 'You are approaching a protected conservation zone',
      severity: 'Critical',
      location: 'Protected Reserve Area - Buffer Zone',
      distance: '150m'
    },
    {
      id: 3,
      type: 'Species Quota',
      message: 'Turmeric quota 85% reached for this month',
      severity: 'Medium',
      species: 'Turmeric',
      quota: '85%'
    }
  ]

  const earningsHistory = [
    { month: 'November 2025', amount: 16800, collections: 145, bonus: 500 },
    { month: 'October 2025', amount: 15200, collections: 132, bonus: 300 },
    { month: 'September 2025', amount: 17500, collections: 156, bonus: 750 },
    { month: 'August 2025', amount: 14900, collections: 128, bonus: 200 }
  ]

  const reputationScore = {
    overall: 94.2,
    punctuality: 96,
    quality: 92,
    compliance: 95,
    sustainability: 93,
    trend: 'increasing'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Navbar */}
      <DashboardNavbar 
        userName="Ravi Kumar" 
        userRole="Farmer"
        dateJoined="15 March 2024"
        approvedBy="Admin Priya Desai"
      />

      {/* Header/Greeting Section */}
      <div className="pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-primary-100 text-sm md:text-base mb-1">Welcome back</p>
                <h1 className="text-2xl md:text-3xl font-bold text-white">{greeting}, Ravi Kumar</h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 gap-1 sm:gap-0">
                  <p className="text-primary-100 text-sm md:text-base">Wayanad, Kerala - Registry ID: HT-FRM-2042</p>
                  <div className="flex items-center space-x-2">
                    {isOnline ? (
                      <>
                        <Wifi className="h-4 w-4 text-green-300" />
                        <span className="text-sm text-green-300">Online</span>
                      </>
                    ) : (
                      <>
                        <WifiOff className="h-4 w-4 text-red-300" />
                        <span className="text-sm text-red-300">Offline Mode</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setNewCollectionEvent({})}
                  className="bg-white text-primary-700 px-5 py-2.5 rounded-xl font-semibold flex items-center space-x-2 hover:bg-primary-50 transition-colors text-sm md:text-base shadow-md"
                >
                  <Plus className="h-4 w-4" />
                  <span>New Collection</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowComplaintModal(true)}
                  className="bg-red-500 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center space-x-2 hover:bg-red-600 transition-colors text-sm md:text-base shadow-md"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Raise Complaint</span>
                </motion.button>
                {!isOnline && (
                  <button className="bg-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center space-x-2 hover:bg-blue-600 transition-colors text-sm md:text-base shadow-md">
                    <MessageSquare className="h-4 w-4" />
                    <span>SMS Sync</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {farmerStats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stat.id * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Alerts */}
        {alerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Alerts</h2>
            <div className="space-y-3">
              {alerts.slice(0, 2).map((alert) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-4 rounded-xl border-l-4 ${
                    alert.severity === 'Critical' ? 'bg-red-50 border-red-500' :
                    alert.severity === 'High' ? 'bg-orange-50 border-orange-500' :
                    'bg-yellow-50 border-yellow-500'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                      alert.severity === 'Critical' ? 'text-red-600' :
                      alert.severity === 'High' ? 'text-orange-600' :
                      'text-yellow-600'
                    }`} />
                    <div>
                      <h3 className="font-medium text-gray-900">{alert.type}</h3>
                      <p className="text-sm text-gray-700 mt-1">{alert.message}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-1 bg-gray-100 rounded-xl p-1 mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Collection Overview', icon: BarChart3 },
            { id: 'collections', label: 'Collection Events', icon: MapPin },
            { id: 'handover', label: 'Batch Handover', icon: Package },
            { id: 'earnings', label: 'Earnings History', icon: Coins },
            { id: 'reputation', label: 'Reputation Score', icon: Award },
            { id: 'sustainability', label: 'Sustainability', icon: Leaf }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm md:text-base ${
                activeTab === tab.id
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              <CollectionSummary />
              <QualityMetrics />
              <WeatherInfo />
            </motion.div>
          )}

          {activeTab === 'collections' && (
            <motion.div
              key="collections"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <CollectionEventsView events={collectionEvents} onSelectEvent={setSelectedEvent} />
            </motion.div>
          )}

          {activeTab === 'handover' && (
            <motion.div
              key="handover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <BatchHandover onShowHandover={setShowHandoverModal} />
            </motion.div>
          )}

          {activeTab === 'earnings' && (
            <motion.div
              key="earnings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <EarningsHistory history={earningsHistory} />
            </motion.div>
          )}

          {activeTab === 'reputation' && (
            <motion.div
              key="reputation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <ReputationDashboard score={reputationScore} />
            </motion.div>
          )}

          {activeTab === 'sustainability' && (
            <motion.div
              key="sustainability"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <SustainabilityScore />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {newCollectionEvent && (
          <NewCollectionModal 
            location={currentLocation} 
            onClose={() => setNewCollectionEvent(null)} 
          />
        )}
        {selectedEvent && (
          <EventDetailModal 
            event={selectedEvent} 
            onClose={() => setSelectedEvent(null)} 
          />
        )}
        {showHandoverModal && (
          <HandoverModal 
            onClose={() => setShowHandoverModal(false)} 
          />
        )}
        {showComplaintModal && (
          <ComplaintModal 
            onClose={() => setShowComplaintModal(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// Collection Summary Component
const CollectionSummary = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Today's Collections</h2>
    <div className="space-y-4">
      {[
        { species: 'Ashwagandha', quantity: '2.5 kg', quality: 'Grade A', time: '09:15' },
        { species: 'Turmeric', quantity: '4.1 kg', quality: 'Grade B+', time: '07:45' },
        { species: 'Brahmi', quantity: '1.8 kg', quality: 'Grade A+', time: '16:30' }
      ].map((item, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">{item.species}</p>
            <p className="text-sm text-gray-600">{item.quantity} - {item.quality}</p>
          </div>
          <span className="text-sm text-gray-500">{item.time}</span>
        </div>
      ))}
    </div>
  </div>
)

// Quality Metrics Component
const QualityMetrics = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Quality Metrics</h2>
    <div className="space-y-4">
      {[
        { metric: 'Moisture Content', value: '13.2%', target: '<15%', status: 'good' },
        { metric: 'Visual Quality', value: '94%', target: '>90%', status: 'excellent' },
        { metric: 'GPS Accuracy', value: '3.1m', target: '<5m', status: 'good' },
        { metric: 'Photo Quality', value: '96%', target: '>85%', status: 'excellent' }
      ].map((item) => (
        <div key={item.metric} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">{item.metric}</p>
            <p className="text-sm text-gray-600">Target: {item.target}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.status === 'excellent' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
          }`}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </div>
)

// Weather Info Component
const WeatherInfo = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Weather & Environment</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Thermometer className="h-5 w-5 text-orange-500" />
          <span className="font-medium">Temperature</span>
        </div>
        <span className="text-2xl font-bold text-gray-900">28°C</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Droplets className="h-5 w-5 text-blue-500" />
          <span className="font-medium">Humidity</span>
        </div>
        <span className="text-xl font-semibold text-gray-900">65%</span>
      </div>
      <div className="bg-green-50 p-3 rounded-lg">
        <p className="text-sm font-medium text-green-900">Optimal Collection Conditions</p>
        <p className="text-xs text-green-700">Good weather for herb collection today</p>
      </div>
    </div>
  </div>
)

// Collection Events View Component
const CollectionEventsView = ({ events, onSelectEvent }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
    <div className="p-6 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Geo-Tagged Collection Events</h2>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Map View</span>
          </button>
        </div>
      </div>
    </div>

    <div className="p-6">
      <div className="space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.01 }}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all cursor-pointer"
            onClick={() => onSelectEvent(event)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{event.species}</h3>
                  <p className="text-sm text-gray-600">Event ID: {event.id}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                event.status === 'Completed' ? 'bg-green-100 text-green-700' :
                event.status === 'Synced' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {event.status}
              </span>
            </div>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-medium">{event.location.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Quantity</p>
                <p className="font-medium">{event.quantity}</p>
              </div>
              <div>
                <p className="text-gray-500">Moisture %</p>
                <p className="font-medium">{event.moisture}</p>
              </div>
              <div>
                <p className="text-gray-500">Quality Grade</p>
                <p className="font-medium">{event.quality}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center space-x-1">
                  <Navigation className="h-3 w-3" />
                  <span>GPS: {event.gpsAccuracy}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Camera className="h-3 w-3" />
                  <span>{event.photos.length} photos</span>
                </span>
              </div>
              <span className="text-xs text-gray-500">{event.timestamp}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

// Batch Handover Component
const BatchHandover = ({ onShowHandover }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Ready for Handover</h2>
      <div className="space-y-4">
        {[
          { batch: 'BATCH-2025-34', species: 'Ashwagandha', quantity: '12.5 kg', quality: 'Grade A', processor: 'Kerala Herbs Cooperative' },
          { batch: 'BATCH-2025-33', species: 'Turmeric', quantity: '28.3 kg', quality: 'Grade B+', processor: 'Spice Processing Unit' }
        ].map((batch) => (
          <div key={batch.batch} className="p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{batch.batch}</h3>
                <p className="text-sm text-gray-600">{batch.species} - {batch.quantity}</p>
                <p className="text-xs text-gray-500">Processor: {batch.processor}</p>
              </div>
              <button 
                onClick={() => onShowHandover(batch)}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 text-sm"
              >
                Handover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Earnings History Component
const EarningsHistory = ({ history }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Earnings History</h2>
      <div className="space-y-4">
        {history.map((record, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900">{record.month}</h3>
              <span className="text-xl font-bold text-green-600">₹{record.amount.toLocaleString()}</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Collections</p>
                <p className="font-medium">{record.collections}</p>
              </div>
              <div>
                <p className="text-gray-500">Quality Bonus</p>
                <p className="font-medium text-green-600">+₹{record.bonus}</p>
              </div>
              <div>
                <p className="text-gray-500">Avg per Collection</p>
                <p className="font-medium">₹{Math.round(record.amount / record.collections)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Reputation Dashboard Component
const ReputationDashboard = ({ score }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Collector Reputation Score</h2>
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-primary-600 mb-2">{score.overall}</div>
        <p className="text-gray-600">Overall Reputation Score</p>
        <div className="flex items-center justify-center mt-2">
          <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
          <span className="text-sm text-green-600">{score.trend}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Punctuality', value: score.punctuality, icon: Clock },
          { label: 'Quality', value: score.quality, icon: Star },
          { label: 'Compliance', value: score.compliance, icon: Shield },
          { label: 'Sustainability', value: score.sustainability, icon: Leaf }
        ].map((metric) => (
          <div key={metric.label} className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3 mb-2">
              <metric.icon className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-900">{metric.label}</span>
            </div>
            <div className="text-2xl font-bold text-primary-600">{metric.value}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Sustainability Score Component
const SustainabilityScore = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Sustainability Score</h2>
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-green-600 mb-2">A+</div>
        <p className="text-gray-600">Environmental Impact Rating</p>
      </div>
      <div className="space-y-4">
        {[
          { metric: 'Carbon Footprint', score: 'Low', percentage: 92 },
          { metric: 'Water Conservation', score: 'Excellent', percentage: 96 },
          { metric: 'Biodiversity Impact', score: 'Positive', percentage: 88 },
          { metric: 'Soil Health', score: 'Good', percentage: 85 }
        ].map((item) => (
          <div key={item.metric} className="p-4 bg-green-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">{item.metric}</span>
              <span className="text-green-700 font-semibold">{item.score}</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Modal Components
const NewCollectionModal = ({ location, onClose }) => {
  const [formData, setFormData] = useState({
    herbalSpecies: '',
    commonName: '',
    scientificName: '',
    quantity: '',
    unit: 'Kilograms (kg)',
    harvestDate: '',
    harvestTime: '',
    harvestMethod: 'Manual Harvesting',
    partCollected: 'Whole Plant',
    latitude: '',
    longitude: '',
    altitude: '',
    gpsAccuracy: '',
    locationName: '',
    weatherConditions: '',
    soilType: '',
    moistureContent: '',
    temperature: '',
    additionalNotes: ''
  })
  const [images, setImages] = useState([])
  const [isCapturingLocation, setIsCapturingLocation] = useState(false)

  const herbalSpeciesOptions = [
    'Ashwagandha (Withania somnifera)',
    'Turmeric (Curcuma longa)',
    'Brahmi (Bacopa monnieri)',
    'Tulsi (Ocimum sanctum)',
    'Neem (Azadirachta indica)',
    'Aloe Vera (Aloe barbadensis)',
    'Ginger (Zingiber officinale)',
    'Giloy (Tinospora cordifolia)',
    'Amla (Phyllanthus emblica)',
    'Shatavari (Asparagus racemosus)'
  ]

  const unitOptions = ['Kilograms (kg)', 'Grams (g)', 'Pounds (lb)', 'Ounces (oz)']
  const harvestMethodOptions = ['Manual Harvesting', 'Mechanical Harvesting', 'Semi-Mechanical', 'Selective Harvesting']
  const partCollectedOptions = ['Whole Plant', 'Leaves', 'Roots', 'Flowers', 'Seeds', 'Bark', 'Fruits', 'Rhizome']
  const weatherOptions = ['Sunny', 'Cloudy', 'Partly Cloudy', 'Rainy', 'Drizzle', 'Windy', 'Humid']
  const soilTypeOptions = ['Loamy', 'Clay', 'Sandy', 'Silt', 'Peaty', 'Chalky', 'Red Soil', 'Black Soil', 'Alluvial']

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const captureCurrentLocation = () => {
    setIsCapturingLocation(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6),
            altitude: position.coords.altitude ? position.coords.altitude.toFixed(2) : '',
            gpsAccuracy: position.coords.accuracy ? position.coords.accuracy.toFixed(2) : ''
          }))
          setIsCapturingLocation(false)
        },
        (error) => {
          console.error('Error capturing location:', error)
          setIsCapturingLocation(false)
        },
        { enableHighAccuracy: true }
      )
    }
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    if (images.length + files.length <= 5) {
      const newImages = files.map(file => ({
        file,
        preview: URL.createObjectURL(file),
        name: file.name
      }))
      setImages(prev => [...prev, ...newImages])
    }
  }

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Record Collection Event</h2>
          
          <div className="space-y-6">
            {/* Herbal Species */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Herbal Species <span className="text-red-500">*</span>
              </label>
              <select 
                value={formData.herbalSpecies}
                onChange={(e) => handleInputChange('herbalSpecies', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select Species</option>
                {herbalSpeciesOptions.map(species => (
                  <option key={species} value={species}>{species}</option>
                ))}
              </select>
            </div>

            {/* Common Name & Scientific Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Common Name</label>
                <input 
                  type="text" 
                  value={formData.commonName}
                  onChange={(e) => handleInputChange('commonName', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                  placeholder="e.g., Indian Ginseng" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Scientific Name</label>
                <input 
                  type="text" 
                  value={formData.scientificName}
                  onChange={(e) => handleInputChange('scientificName', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                  placeholder="e.g., Withania somnifera" 
                />
              </div>
            </div>

            {/* Quantity & Unit */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input 
                  type="number" 
                  step="0.01"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                  placeholder="0.00" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                <select 
                  value={formData.unit}
                  onChange={(e) => handleInputChange('unit', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {unitOptions.map(unit => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Harvest Date & Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Harvest Date <span className="text-red-500">*</span>
                </label>
                <input 
                  type="date" 
                  value={formData.harvestDate}
                  onChange={(e) => handleInputChange('harvestDate', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Harvest Time</label>
                <input 
                  type="time" 
                  value={formData.harvestTime}
                  onChange={(e) => handleInputChange('harvestTime', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                />
              </div>
            </div>

            {/* Harvest Method & Part Collected */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Harvest Method <span className="text-red-500">*</span>
                </label>
                <select 
                  value={formData.harvestMethod}
                  onChange={(e) => handleInputChange('harvestMethod', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {harvestMethodOptions.map(method => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Part Collected <span className="text-red-500">*</span>
                </label>
                <select 
                  value={formData.partCollected}
                  onChange={(e) => handleInputChange('partCollected', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {partCollectedOptions.map(part => (
                    <option key={part} value={part}>{part}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* GPS Location Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GPS Location <span className="text-red-500">*</span>
              </label>
              <button 
                type="button"
                onClick={captureCurrentLocation}
                disabled={isCapturingLocation}
                className="mb-4 bg-green-600 text-white px-4 py-2.5 rounded-lg font-medium flex items-center space-x-2 hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                <Navigation className="h-4 w-4" />
                <span>{isCapturingLocation ? 'Capturing...' : 'Capture Current Location'}</span>
              </button>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    value={formData.latitude}
                    onChange={(e) => handleInputChange('latitude', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                    placeholder="Latitude" 
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    value={formData.longitude}
                    onChange={(e) => handleInputChange('longitude', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                    placeholder="Longitude" 
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <input 
                    type="text" 
                    value={formData.altitude}
                    onChange={(e) => handleInputChange('altitude', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                    placeholder="Altitude (meters)" 
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    value={formData.gpsAccuracy}
                    onChange={(e) => handleInputChange('gpsAccuracy', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                    placeholder="GPS Accuracy (meters)" 
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <input 
                  type="text" 
                  value={formData.locationName}
                  onChange={(e) => handleInputChange('locationName', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                  placeholder="Location Name (e.g., Farm Name, Village)" 
                />
              </div>
            </div>

            {/* Weather & Soil Type */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weather Conditions</label>
                <select 
                  value={formData.weatherConditions}
                  onChange={(e) => handleInputChange('weatherConditions', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select Weather</option>
                  {weatherOptions.map(weather => (
                    <option key={weather} value={weather}>{weather}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Soil Type</label>
                <select 
                  value={formData.soilType}
                  onChange={(e) => handleInputChange('soilType', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select Soil Type</option>
                  {soilTypeOptions.map(soil => (
                    <option key={soil} value={soil}>{soil}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Moisture Content & Temperature */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Moisture Content (%)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={formData.moistureContent}
                  onChange={(e) => handleInputChange('moistureContent', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                  placeholder="0.0" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Temperature (°C)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={formData.temperature}
                  onChange={(e) => handleInputChange('temperature', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                  placeholder="0.0" 
                />
              </div>
            </div>

            {/* Harvest Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Harvest Images <span className="text-red-500">*</span> <span className="text-gray-500 font-normal">(Max 5)</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <input 
                  type="file" 
                  accept="image/png,image/jpeg" 
                  multiple 
                  onChange={handleImageUpload}
                  className="hidden" 
                  id="image-upload"
                  disabled={images.length >= 5}
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">Click to upload images</p>
                  <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                </label>
              </div>
              
              {images.length > 0 && (
                <div className="grid grid-cols-5 gap-2 mt-4">
                  {images.map((img, index) => (
                    <div key={index} className="relative aspect-square">
                      <img 
                        src={img.preview} 
                        alt={`Upload ${index + 1}`} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button 
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
              <textarea 
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                rows="3" 
                placeholder="Any additional information about the harvest..."
              />
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3 p-6 pt-0">
          <button 
            onClick={onClose} 
            className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
          >
            <CheckCircle className="h-5 w-5" />
            <span>Record Collection</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

const EventDetailModal = ({ event, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Collection Event Details</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(event).filter(([key]) => !['photos', 'location'].includes(key)).map(([key, value]) => (
            <div key={key}>
              <label className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <p className="font-semibold">{typeof value === 'object' ? JSON.stringify(value) : value}</p>
            </div>
          ))}
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-500">Location Details</label>
          <p className="font-semibold">{event.location.name}</p>
          <p className="text-sm text-gray-600">Lat: {event.location.lat}, Lng: {event.location.lng}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">Photos ({event.photos.length})</label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {event.photos.map((photo, index) => (
              <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Camera className="h-6 w-6 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          View on Map
        </button>
        <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
)

const HandoverModal = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Batch Handover</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cooperative/Processor</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option>Kerala Herbs Cooperative</option>
            <option>Spice Processing Unit</option>
            <option>Organic Herbs Collective</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Handover Photos</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Take handover verification photos</p>
            <button className="mt-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
              Open Camera
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
          <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2" rows="3" placeholder="Any additional notes about the handover..."></textarea>
        </div>
      </div>
      
      <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
          Complete Handover
        </button>
        <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Cancel
        </button>
      </div>
    </motion.div>
  </motion.div>
)

const ComplaintModal = ({ onClose }) => {
  const [category, setCategory] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [priority, setPriority] = useState('medium')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const categories = [
    'Payment Issues',
    'Quality Dispute',
    'Pickup Delay',
    'Equipment Problem',
    'App/System Issue',
    'Communication Problem',
    'Other'
  ]

  const handleSubmit = async () => {
    if (!category || !subject || !message) return
    
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Auto close after success
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="h-10 w-10 text-green-600" />
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Complaint Submitted!</h3>
          <p className="text-gray-600">Your complaint has been sent to the admin. You will receive a response soon.</p>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Raise Complaint</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Brief subject of your complaint"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
            <div className="flex space-x-3">
              {['low', 'medium', 'high', 'urgent'].map(p => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium capitalize transition-colors ${
                    priority === p
                      ? p === 'urgent' ? 'bg-red-600 text-white'
                        : p === 'high' ? 'bg-orange-500 text-white'
                        : p === 'medium' ? 'bg-yellow-500 text-white'
                        : 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              rows="4"
              placeholder="Describe your complaint in detail..."
            />
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
          <button 
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={!category || !subject || !message || isSubmitting}
            className={`flex-1 py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors ${
              !category || !subject || !message || isSubmitting
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="h-5 w-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Submit Complaint</span>
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default FarmerLandingPage
